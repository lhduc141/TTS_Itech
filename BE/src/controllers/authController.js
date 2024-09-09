import { Sequelize } from "sequelize";
import { responseData } from "../config/response.js";
import initModels from "../models/init-models.js";
import sequelize from "../config/database.js";
import bcrypt from "bcrypt";
// import { getUser } from "./userController.js";

import {
    createToken,
    createRefToken,
    decodeToken,
    checkToken,
    checkRefToken,
} from "../config/jwt.js";

let model = initModels(sequelize);
let Op = Sequelize.Op;

export const login = async (req, res) => {
    try {
        let { username, password } = req.body;
        const update_at = new Date();

        let getAdmin = await model.Admin.findOne({
            where: {
                username,
            },
        });
        console.log(getAdmin)

        if (getAdmin) {
            if (bcrypt.compare(password, getAdmin.password)) {
                let key = new Date().getTime();

                // khoi tao token va refToken
                let token = createToken({ admin_id: getAdmin.admin_id, key });
                let reftoken = createRefToken({ admin_id: getAdmin.admin_id, key });

                // luu refToken vao table user
                //UPDATE.Admin
                await model.Admin.update(
                    {
                        token, reftoken, update_at
                    },
                    {
                        where: {
                            admin_id: getAdmin.admin_id,
                        },
                    }
                );

                responseData(res, "Success", {"token": token}, 200);
            } else {
                responseData(res, "Wrong Pass", "", 400);
            }
        } else {
            responseData(res, "Fail: Email Wrong", "", 400);
        }
    } catch {
        responseData(res, "Fail", "", 500);
    }
};


export const forgetPassword = async (req, res) => {

}

export const tokenRef = async (req, res) => {
    try {
        let { token } = req.headers;

        //check token => kiem tra token
        let check = checkToken(token);
        if (check != null && check.name != "TokenExpiredError") {
            // token khong hop le
            res.status(401).send(check.name);
            return;
        }
        let dToken = decodeToken(token);
        let getAdmin = await model.Admin.findOne({
            where: {
                admin_id: dToken.data.admin_id,
            },
        });

        //check Reftoken
        let checkRef = checkRefToken(getAdmin.reftoken);
        if (checkRef != null) {
            // check ref token con han
            res.status(401).send(check.name);
            return;
        }

        //Check code
        let refToken = decodeToken(getAdmin.refresh_token);
        if (dToken.data.key != refToken.data.key) {
            res.status(401).send(check.name);
            return;
        }

        // tao moi access token
        let newToken = createToken({
            user_id: getAdmin.user_id,
            key: refToken.data.key,
        });

        responseData(res, "Success", newToken, 200);
    } catch (error) {
        responseData(res, "Fail", "", 500);
    }
};

export const logout = async (req, res) => {
    let { token } = req.headers; //Lay token o header

    //decode token
    let dToken = decodeToken(token);

    // lay thong tin user
    let getAdmin = await model.Admin.findOne({
        where: {
            admin_id: dToken.data.admin_id,
        },
    });

    await model.Admin.update(
        { ...getAdmin.dataValues, refresh_token: "" },
        { where: { admin_id: getAdmin.admin_id } }
    );

    responseData(res, "", newToken, 200);
};