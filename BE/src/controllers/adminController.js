import { responseData } from "../config/response.js";
import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
let model = initModels(sequelize);

//GET USER
export const getAdmin = async (req, res) => {
    try {
        let data = await model.teams.findAll();

        responseData(res, "Success", data, 200);
    } catch (error) {
        responseData(res, "Fail", "", 500);
    }
};
