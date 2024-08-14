import express from "express";
import {
    getAboutUs,
    getCarousel,
    getCustomer,
    getDetailInformation,
    getFeedback, getFieldsDetail,
    getFieldsList, getMembers, getProjectsList,
    getWhyUs
} from "../controllers/userController.js";

const userRoutes = express.Router();

userRoutes.get("/carousel", getCarousel);
userRoutes.get("/about-us", getAboutUs);
userRoutes.get("/members", getMembers);
userRoutes.get("/fields", getFieldsList);
userRoutes.get("/fields-detail/:field_id", getFieldsDetail)
userRoutes.get("/why-us", getWhyUs);
userRoutes.get("/feedback", getFeedback);
userRoutes.get("/customer", getCustomer);
userRoutes.get("/projects", getProjectsList);
userRoutes.get("/detail-information/:cpn_id", getDetailInformation);

export default userRoutes;