import { responseData } from "../config/response.js";
import initModels from "../models/init-models.js";
import sequelize from "../config/database.js";
let model = initModels(sequelize);

export const getCarousel = async (req, res) => {
    try {
        let data = await model.Image.findAll({
            where: {img_type: 'carousel'},
            attributes: ['img_id', 'img_name', 'img_type', 'img_content']
        })
        if (!data) {
            responseData(res, "Fail", "No carousel image", 404);
        }

        responseData(res, "Success", data, 200);
    } catch {
        responseData(res, "Error ...", "", 500);
    }
}
export const getFieldsList = async (req, res) => {
    try {
        let {lang_id} = req.headers;
        let data = await model.Fields.findAll({
            where: {lang_id},
            attributes: ['field_id', 'field_name', 'fieldDesc', 'fieldImage'],
        })
        if (!data) {
            responseData(res, "Fail", "No fields", 404);
        }

        responseData(res, "Success", data, 200);
    } catch {
        responseData(res, "Error ...", "", 500);
    }
}
export const getAllFieldPost = async (req, res) => {
    try {
        let { lang_id } = req.headers;

        // Fetch fields with associated FieldPost
        let data = await model.Fields.findAll({
            where: { lang_id },
            attributes: ['field_id', 'field_name', 'fieldDesc', 'fieldImage'],
            include: [
                {
                    model: model.FieldPost,
                    as: "FieldPosts", // Ensure that this matches your association in the model
                    attributes: [
                        ['fPost_id', 'fieldPostId'],
                        ['fPost_title', 'fieldPostTitle'],
                        ['fPost_content', 'fPostContent'],
                    ]
                }
            ]
        });

        // Check if data is empty instead of null
        if (data.length === 0) {
            return responseData(res, "Fail", "No fields found", 404);
        }

        // Return the found data
        return responseData(res, "Success", data, 200);
    } catch (error) {
        // Include the error message for easier debugging
        return responseData(res, "Error", error.message, 500);
    }
};
export const getFieldsDetail = async (req, res) => {
    try {
        let { field_id } = req.params;

        let data = await model.FieldPost.findOne({
            where: { field_id },
            attributes: [
                ['fPost_id', 'fieldPostId'],
                ['fPost_title', 'fieldPostTitle'],
                ['fPost_content', 'fPostContent'],
            ],
            include: [
                {
                    model: model.Fields,
                    as: 'field',  // Add 'as' to match the defined association
                    attributes: ['field_id', 'field_name', 'fieldDesc', 'fieldImage'],
                }
            ]
        });


        if (!data) {
            return responseData(res, "Fail", "No fields", 404); // Add return here
        }

        return responseData(res, "Success", data, 200); // Add return here
    } catch (error) {
        console.error("Error:", error);
        return responseData(res, "Error ...", "", 500); // Add return here
    }
}
export const getAboutUs = async (req, res) => {
    try {
        let { lang_id } = req.headers;

        let data = await model.Post.findOne({
            where: { post_type: 'aboutus', lang_id },
            attributes: [
                ['post_id', 'postId'],
                ['create_at', 'createdAt'],
                ['update_at', 'updatedAt']
            ],
            include: [
                {
                    model: model.PostDetail,
                    as: 'PostDetails',
                    attributes: ['pDetail_id', 'pDetail_title', 'pDetail_content', ['create_at', 'createdAt'],
                        ['update_at', 'updatedAt']
                    ]
                }
            ]
        });

        if (data.length === 0) {
            return res.status(404).json({ message: "No posts found" });
        }

        res.status(200).json({ message: "Success", data });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "An error occurred", error });
    }
}
export const getWhyUs = async (req, res) => {
    try {
        let { lang_id } = req.headers;

        let data = await model.Post.findOne({
            where: { post_type: "whyus", lang_id },
            attributes: [
                ['post_id', 'postId'],
                ['create_at', 'createdAt'],
                ['update_at', 'updatedAt']
            ],
            include: [
                {
                    model: model.PostDetail,
                    as: 'PostDetails',
                    attributes: ['pDetail_id', 'pDetail_title', 'pDetail_content', ['create_at', 'createdAt'],
                        ['update_at', 'updatedAt']
                    ]
                }
            ]
        })

        if (data.length === 0) {
            return res.status(404).json({ message: "No posts found" });
        }

        res.status(200).json({ message: "Success", data });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "An error occurred", error });
    }
}
export const getFeedback = async (req, res) => {
    try {
        let { lang_id } = req.headers;

        let data = await model.Feedback.findAll({
            where: { lang_id },
            attributes: [
                ['fb_id', 'id'],
                ['fb_writer', 'writer'],
                ['fb_cpn', 'company'],
                ['fb_content', 'content'],
                ['create_at', 'createdAt'],
                ['update_at', 'updatedAt']
            ],
        });

        if (data.length === 0) {
            return res.status(404).json({ message: "No posts found" });
        }

        res.status(200).json({ message: "Success", data });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "An error occurred", error });
    }
}
export  const getCustomer = async (req, res) => {
    try {
        let data = await model.Image.findAll({
            where: {img_type: 'customer'},
            attributes: ['img_id', 'img_name', 'img_type', 'img_content']
        })
        if (!data) {
            responseData(res, "Fail", "No customer image", 404);
        }

        responseData(res, "Success", data, 200);
    } catch {
        responseData(res, "Error ...", "", 500);
    }
}
export const getDetailInformation = async (req, res) => {
    try {
        let { lang_id } = req.headers;
        let { cpn_id } = req.params;

        let data = await model.Information.findOne({
            where: { lang_id, cpn_id },
            attributes: [
                ['cpn_id', 'id'],
                ['cpn_name', 'name'],
                ['cpn_sname', 'sname'],
                'cpn_img',
                'phone',
                ['cpn_address', 'address'],
                ['cpn_title', 'title'],
                ['cpn_desc', 'desc'],
                ['cpn_copyright', 'copyright'],
                ['cpn_content', 'content'],
                ['create_at', 'createdAt'],
                ['update_at', 'updatedAt']
            ],
        });

        if (data.length === 0) {
            return res.status(404).json({ message: "No posts found" });
        }

        res.status(200).json({ message: "Success", data });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "An error occurred", error });
    }
}
export const getMembers = async (req, res) => {
    try {
        let { lang_id } = req.headers;

        let data = await model.Teams.findAll({
            where: { lang_id },
            attributes: [
                ['mem_id', 'id'],
                ['mem_img', 'img'],
                ['mem_name', 'name'],
                ['mem_pos', 'position'],
                ['mem_desc', 'desc'],
                ['create_at', 'createdAt'],
                ['update_at', 'updatedAt']
            ],
        });

        if (data.length === 0) {
            return res.status(404).json({ message: "No posts found" });
        }

        res.status(200).json({ message: "Success", data });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "An error occurred", error });
    }
}
export const getProjectsList = async (req, res) => {

}
export const getAllPost = async (req, res) => {
    try {
        let data = await model.PostDetail.findAll({
            attributes: [
                'pDetail_id', 'pDetail_title', 'pDetail_content',
            ],
            include: [
                {
                    model: model.Post,
                    as: "post",
                    attributes: ['post_id', 'post_type', "lang_id"]
                }
            ]
        });

        if (data.length === 0) {
            return res.status(404).json({ message: "No posts found" });
        }

        res.status(200).json({ message: "Success", data });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "An error occurred", error });
    }
}