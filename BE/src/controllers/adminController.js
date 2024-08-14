import { responseData } from "../config/response.js";
import initModels from "../models/init-models.js";
import sequelize from "../config/database.js";
let model = initModels(sequelize);

export const putDetailInformation = async (req, res) => {
    try {
        const { cpn_id } = req.params;
        const {
            cpn_name, cpn_sname, cpn_address,
            cpn_title, cpn_desc, cpn_copyright, cpn_content,
        } = req.body;
        const update_at = new Date(); // Generate the timestamp in the proper format

        // Find the company by cpn_id
        const company = await model.Information.findOne({
            where: { cpn_id },
        });
        const data = {
            cpn_name, cpn_sname, cpn_address,
            cpn_title, cpn_desc, cpn_copyright, cpn_content, update_at,
        };

        if (!company) {
            return responseData(res, "Fail", "Cannot find branch", 404);
        }else {
            await company.update(data);

        }

        return responseData(res, "Success", data, 200);
    } catch (e) {
        return responseData(res, "Error", e.message, 500);
    }
};

//
export const putCarousel = async (req, res) => {

}

export const postCarousel = async (req, res) => {

}


//Feedback table
export const putFeedback = async (req, res) => {

}

export const postFeedback = async (req, res) => {

    try {
        const { fb_id } = req.params;
        const {
            fb_writer, fb_cpn, fb_content
        } = req.body;
        const update_at = new Date();

        const company = await model.Information.findOne({
            where: { fb_id , fb_writer, fb_cpn, fb_content},
        });
        let newCompany = {

        }
        if (company) {
            responseData(res, "Fail", "feedback is available", 200);
        }else {

            await model.Information.create()
        }

        return responseData(res, "Success", data, 200);
    } catch (e) {
        return responseData(res, "Error", e.message, 500);
    }
}


//
export const putWhy = async (req, res) => {}

export const postWhy = async (req, res) => {}


//
export const putAboutUs = async (req, res) => {}

export const postAboutUs = async (req, res) => {}


//
export const putMember = async (req, res) => {}

export const postMember = async (req, res) => {}


//
export const putContact = async (req, res) => {}

export const postContact = async (req, res) => {}


//
export const putFieldsList = async (req, res) => {}

export const postFieldsList = async (req, res) => {}


//
export const putFieldDetail = async (req, res) => {}

export const postFieldDetail = async (req, res) => {}

export const putProjects = async (req, res) => {}

export const postProjects = async (req, res) => {}

export const putCustomers = async (req, res) => {}

export const postCustomers = async (req, res) => {}

export const getAdminDetails = async (req, res) => {
    try {
        let {id} = req.params;

        let data = await model.Admin.findAll({

        })

        responseData(res, "Success", data, 200);
    } catch (e) {
        responseData(res, "Error ...", e.message, 500);
    }
}
