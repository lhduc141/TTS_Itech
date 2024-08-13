import { responseData } from "../config/response.js";
import initModels from "../models/init-models.js";
import sequelize from "../config/database.js";
let model = initModels(sequelize);

export const putDetailInformation = async (req, res) => {}

//
export const putCarousel = async (req, res) => {
    try {
        let { cpn_id } = req.params;
        let {
            cpn_name, cpn_sname, cpn_address,
            cpn_title, cpn_desc, cpn_copyright, cpn_content,
        } = req.body;
        let updated_at = new Date(); // Generate the timestamp in the proper format

        let company = await model.information.findOne({
            where: { cpn_id },
        });

        if (!company) {
            return responseData(res, "Fail", "Cannot find branch", 404);
        } else {
            let data = {
                cpn_name, cpn_sname, cpn_address,
                cpn_title, cpn_desc, cpn_copyright, cpn_content, updated_at,
            };
            await company.update(data);
            return responseData(res, "Success", data, 200); // Respond with success
        }

    } catch (e) {
        return responseData(res, "Error ...", e.message, 500); // Properly handle and return errors
    }
}


export const postCarousel = async (req, res) => {}


//
export const putFeedback = async (req, res) => {}

export const postFeedback = async (req, res) => {}


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

// export const  = async (req, res) => {}
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

// try {
//     let {id} = req.params;
//
//     let parent = await model.Parent.findOne({
//         where: {ParentId: id},
//         include: [{
//             model: model.User, as: "user"
//         }]
//     });
//     !parent ? responseData(res, "Fail", "Parent not found", 404) : null
//
//     let {address} = parent;
//     let {name, phoneNumber, email} = parent.user;
//     let data = {
//         name,
//         phoneNumber,
//         address,
//         email
//     }
//
//     responseData(res, "Success", data, 200);
// } catch (e) {
//     responseData(res, "Error ...", e.message, 500);
// }