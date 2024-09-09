import { responseData } from "../config/response.js";
import initModels from "../models/init-models.js";
import sequelize from "../config/database.js";
import {checkToken, verifyToken} from "../config/jwt.js";
let model = initModels(sequelize);

// Utility function to delete old files
const deleteOldFile = (filePath) => {
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath); // Delete the old file
    }
};

// Utility function to handle image paths
//UPDATE AVATA
// FS: File System
import fs from "fs";

export const putDetailInformation = [
    verifyToken,
    async (req, res) => {
        try {
            const { cpn_id } = req.params;
            const {
                cpn_name, cpn_sname, cpn_address,
                cpn_title, cpn_desc, cpn_copyright, cpn_content,
            } = req.body;
            const update_at = new Date();

            // Find the company by its ID
            const company = await model.Information.findOne({
                where: { cpn_id },
            });

            if (!company) {
                return responseData(res, "Fail", "Cannot find Information to change", 404);
            }

            // Update the company information
            const data = {
                cpn_id, cpn_name, cpn_sname, cpn_address,
                cpn_title, cpn_desc, cpn_copyright, cpn_content, update_at,
            };

            await company.update(data); // Apply the updates

            return responseData(res, "Success", data, 200); // Respond with success
        } catch (e) {
            return responseData(res, "Error", e.message, 500); // Handle any errors
        }
    }
];

import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/img'); // Path to save the file
    },
    filename: async function (req, file, cb) {
        let { img_id } = req.params;

        // Find the corresponding image record in the database to determine the new filename
        const imageRecord = await model.Image.findOne({
            where: { img_id }
        });

        if (!imageRecord) {
            cb(new Error("Image record not found"), false);
        } else {
            // Use the img_id or another unique identifier to rename the file
            const newFilename = `carousel_${img_id}${path.extname(file.originalname)}`; // For example: carousel_1.jpg
            cb(null, newFilename); // Save the file with the new name
        }
    }
});
const upload = multer({ storage: storage });

// Carousel
export const putCarousel = [
    verifyToken,
    upload.single("file"), // Middleware to handle single file upload
    async (req, res) => {
        try {
            let { file} = req;
            if (!file) {
                return res.status(400).send({ message: "No file provided" });
            }

            let { img_id } = req.params;

            // Find the Image record in the database
            let data = await model.Image.findOne({
                where: { img_id, img_type: "carousel" },
            });

            if (!data) {
                return res.status(404).send({ message: "Image not found" });
            }

            // Get the old file path
            const oldFilePath = path.join(process.cwd(), data.img_content);

            // Delete the old image file if it exists
            if (fs.existsSync(oldFilePath)) {
                fs.unlinkSync(oldFilePath); // Delete the old file
            }

            // Construct the relative file path to be stored in the database
            let newFilePath = `${file.filename}`; // Same as the old filename

            // Update the img_content field with the new file path
            data.img_content = newFilePath;
            await data.save();

            // Respond with success and the updated data
            return responseData(res, "Success", { img_id, img_content: newFilePath }, 200);
        } catch (error) {
            return res.status(500).send({ message: error.message });
        }
    },
]

export const postCarousel = [
    verifyToken,
    async (req, res) => {
        try {
            const {
                img_name, img_content
            } = req.body;

            const create_at = new Date();

            const check = await model.Image.findOne({
                where: { img_type: "carousel", img_name, img_content },
            });

            if (check) {
                return responseData(res, "Fail", "Carousel already exists in the table", 500)
            }

            const data = await model.Image.create({
                img_name,
                img_type: "carousel",
                img_content,
                create_at
            });

            return responseData(res, "Success", data, 201);
        } catch (e) {
            return responseData(res, "Error", e.message, 500)
        }
    }
]


// Feedback
export const putFeedback = [
    verifyToken,
    async (req, res) => {

        try {
            const { fb_id } = req.params;
            const {
                fb_writer, fb_cpn, fb_content,
            } = req.body;

            const update_at = new Date(); // Generate the timestamp in the proper format
            const data = {
                fb_writer, fb_cpn, fb_content, update_at
            };

            const feedback = await model.Feedback.findOne({
                where: { fb_id },
            });

            if (!feedback) {
                return responseData(res, "Fail", "Cannot find Feedback Post", 404);
            }else {
                await feedback.update(data);
            }

            return responseData(res, "Success", data, 200);
        } catch (e) {
            return responseData(res, "Error", e.message, 500);
        }
    }
]

export const postFeedback = [
    verifyToken,
    async (req, res) => {
        try {
            const { fb_id } = req.params;
            const {
                fb_writer, fb_cpn, fb_content
            } = req.body;
            const update_at = new Date();

            // Check if the feedback already exists
            const existingFeedback = await model.Feedback.findOne({
                where: { fb_id, fb_writer, fb_cpn, fb_content },
            });

            if (existingFeedback) {
                return responseData(res, "Fail", "Feedback is already available", 200);
            }

            const newFeedback = await model.Feedback.create({
                fb_id,
                fb_writer,
                fb_cpn,
                fb_content,
                update_at
            });

            return responseData(res, "Success", newFeedback, 201);
        } catch (e) {
            console.error("Error:", e.message);
            return responseData(res, "Error", e.message, 500);
        }
    }
]


// Why Us Post
export const putWhy = [
    verifyToken,
    async (req, res) => {
        try {
            const { why_id } = req.params;
            const {
                pDetail_title, pDetail_content
            } = req.body;

            const update_at = new Date(); // Generate the timestamp in the proper format
            const why = await model.PostDetail.findOne({
                where: { pDetail_id: why_id },
            });
            const checkPostType = await model.Post.findOne({
                where: {post_id: why_id, post_type: "whyus"}
            })

            let data = {
                pDetail_id: why_id,
                pDetail_title,
                pDetail_content,
                post_id: why.post_id,
                update_at
            }
            if (!checkPostType) {
                return responseData(res, "Fail", "Cannot find Why_Us Post", 404);
            }else {
                await why.update(data);
            }


            return responseData(res, "Success", data, 200);
        } catch (e) {
            return responseData(res, "Error", e.message, 500);
        }
    }
]

export const postWhy = [
    verifyToken,
    async (req, res) => {
        try {
            const { why_id } = req.params;
            const {
                pDetail_title, pDetail_content
            } = req.body;

            const create_at = new Date();

            const checkPostType = await model.Post.findOne({
                where: {post_id: why_id, post_type: "whyus"}
            })

            const checkPostDetail = await model.PostDetail.findOne({

                where:{post_id: why_id, pDetail_title, pDetail_content}
            })

            if (!checkPostType) {
                return responseData(res, "Fail", "Not is why us", 404);
            } else if (checkPostDetail) {
                return responseData(res, "Fail", "Post detail about us already exists in the table", 200);
            }
            const newPostWhy = await model.PostDetail.create({
                pDetail_title,
                pDetail_content,
                post_id: why_id,
                create_at
            });

            return responseData(res, "Success", newPostWhy, 201);
        } catch (e) {
            return responseData(res, "Error", e.message, 500);
        }
    }
]


// About us
export const putAboutUs = [
    verifyToken,
    async (req, res) => {
        try {
            const { aup_id } = req.params;
            const {
                pDetail_title, pDetail_content
            } = req.body;

            const update_at = new Date(); // Generate the timestamp in the proper format
            const why = await model.PostDetail.findOne({
                where: { pDetail_id: aup_id },
            });
            const checkPostType = await model.Post.findOne({
                where: {post_id: aup_id, post_type: "aboutus"}
            })

            let data = {
                pDetail_id: aup_id,
                pDetail_title,
                pDetail_content,
                post_id: why.post_id,
                update_at
            }
            if (!checkPostType) {
                return responseData(res, "Fail", "Cannot find about us post", 404);
            }else {
                await why.update(data);
            }


            return responseData(res, "Success", data, 200);
        } catch (e) {
            return responseData(res, "Error", e.message, 500);
        }
    }
]

export const postAboutUs = [
    verifyToken,
    async (req, res) => {
        try {
            const { aup_id } = req.params;
            const {
                pDetail_title, pDetail_content
            } = req.body;
            const create_at = new Date();
            const checkPostType = await model.Post.findOne({
                where: {post_id: aup_id, post_type: "aboutus"}
            })
            const checkPostDetail = await model.PostDetail.findOne({

                where:{post_id: aup_id, pDetail_title, pDetail_content}
            })

            if (!checkPostType) {
                return responseData(res, "Fail", "Not is about us", 404);
            } else if (checkPostDetail) {
                return responseData(res, "Fail", "Post detail about us already exists in the table", 200);
            }
            const newPostAbout = await model.PostDetail.create({
                pDetail_content,
                pDetail_title,
                post_id: aup_id,
                create_at,
            });

            return responseData(res, "Success", newPostAbout, 201);
        } catch (e) {
            return responseData(res, "Error", e.message, 500);
        }
    }
]


// Members
export const putMember = [
    verifyToken,
    async (req, res) => {
        try {
            const { mem_id } = req.params;
            const {
                mem_img, mem_name, mem_pos,
            } = req.body;

            const update_at = new Date();
            const member = await model.Teams.findOne({
                where: { mem_id },
            });

            let data = {
                mem_img,
                mem_name,
                mem_pos,
                update_at,
            }
            if (!member) {
                return responseData(res, "Fail", "Cannot find Members Information", 404);
            }else {
                await member.update(data);
            }

            return responseData(res, "Success", data, 200);
        } catch (e) {
            return responseData(res, "Error", e.message, 500);
        }
    }
]

export const postMember = [
    verifyToken,
    async (req, res) => {
        try {
            const {
                mem_img, mem_name, mem_pos,
            } = req.body;
            const create_at = new Date();

            let check = await model.Teams.findOne({
                where: {mem_name, mem_pos, mem_img}
            })

            if (check){
                return responseData(res, "Fail", "Member already exists in the table", 200)
            }

            const member = await model.Teams.create({
                mem_img,
                mem_name,
                mem_pos,
                create_at,
            });

            return responseData(res, "Success", member, 201)

        } catch (e) {
            return responseData(res, "Error", e.message, 500)
        }
    }
]


// NOT have any API ?
export const putContact = async (req, res) => {}

export const postContact = async (req, res) => {}


// Edit FieldList
export const putFieldsList = [
    verifyToken,
    async (req, res) => {
        try {
            const { field_id } = req.params;
            const {
                field_name,
            } = req.body;

            const update_at = new Date();
            const fields = await model.Fields.findOne({
                where: { field_id },
            });

            let data = {
                field_name,
                update_at
            }
            if (!fields) {
                return responseData(res, "Fail", "Cannot find Field Item", 404);
            }else {
                await fields.update(data);
            }

            return responseData(res, "Success", data, 200);
        } catch (e) {
            return responseData(res, "Error", e.message, 500);
        }
    }
]

export const postFieldsList = [
    verifyToken,
    async (req, res) => {
        try {
            const {
                field_name
            } = req.body;
            const create_at = new Date();
            const check = await model.Fields.findOne({
                where: { field_name },
            });

            if (check){
                return responseData(res, "Fail", "Field already exists in the table", 200)
            }

            let data = await model.Fields.create({
                field_name,
                create_at
            })

            return responseData(res, "Success", data, 201)
        } catch (e) {
            return responseData(res, "Error", e.message, 500)
        }
    }
]


// Fields Detail
export const putFieldDetail = [
    verifyToken,
    async (req, res) => {
        try {
            const { fPost_id } = req.params;
            const {
                fPost_title, fPost_content,
            } = req.body;

            const update_at = new Date();
            const fieldPost = await model.FieldPost.findOne({
                where: { fPost_id },
            });

            let data = {
                fPost_title, fPost_content,
                update_at
            }
            if (!fieldPost) {
                return responseData(res, "Fail", "Cannot find Field Item", 404);
            }else {
                await fieldPost.update(data);
            }

            return responseData(res, "Success", data, 200);
        } catch (e) {
            return responseData(res, "Error", e.message, 500);
        }
    }
]

export const postFieldDetail = [
    verifyToken,
    async (req, res) => {
        try {
            const { fPost_id } = req.params;
            const {
                fPost_title, fPost_content,
            } = req.body;
            const create_at = new Date();
            let check1 = await model.FieldPost.findOne({
                where: {fPost_title, fPost_content}
            })

            let check2 = await model.Post.findOne({
                where: {fPost_id}
            })

            if (check1) {
                return responseData(res, "Fail", "Field detail already exists in the table", 200)
            } else if(!check2) {
                return responseData(res, "Fail", "Cannot find Field Item", 404)
            }

            const data = await model.FieldPost.create({
                fPost_title,
                fPost_content,
                create_at,
                post_id: fPost_id,
            })

            return responseData(res, "Success", data, 201)
        } catch (e) {
            return responseData(res, "Error", e.message, 500)
        }
    }
]


// Projects
export const putProjects = async (req, res) => {}

export const postProjects = async (req, res) => {}


// Customer
export const putCustomers = [
    verifyToken,
    async (req, res) => {
        try {
            const { img_id } = req.params;
            const {
                img_name, img_content
            } = req.body;
            const update_at = new Date();

            const customer = await model.Image.findOne({
                where: { img_id, img_type: "customer" },
            });
            const data = {
                img_name, img_content, update_at,
            };

            if (!customer) {
                return responseData(res, "Fail", "Cannot find Information to change", 404);
            }else {
                await customer.update(data);

            }

            return responseData(res, "Success", data, 200);
        } catch (e) {
            return responseData(res, "Error", e.message, 500);
        }
    }
]

export const postCustomers = [
    verifyToken,
    async (req, res) => {
        try {
            const {
                img_name, img_content
            } = req.body;
            const create_at = new Date();
            const check = await model.Image.findOne({
                where: { img_type: "customer", img_name, img_content },
            });

            if (check) {
                return responseData(res, "Fail", "Customer already exists in the table", 200)
            }

            const data = await model.Image.create({
                img_name,
                img_type: "customer",
                img_content,
                create_at,
            });

            return responseData(res, "Success", data, 201)
        } catch (err) {
            return responseData(res, "Error", err.message, 500);
        }
    }
]

export const getAdminDetails = [
    verifyToken,
    async (req, res) => {
        try {
            let {id} = req.params;

            let data = await model.Admin.findAll({

            })

            return responseData(res, "Success", data, 200);
        } catch (e) {
            return responseData(res, "Error ...", e.message, 500);
        }
    }
]
export const putPostDetail = [
    verifyToken,
    async (req, res) => {
        try {
            let {pDetail_id} = req.params;

            let data = await model.Admin.findAll({

            })

            return responseData(res, "Success", data, 200);
        } catch (e) {
            return responseData(res, "Error ...", e.message, 500);
        }
    }
]
