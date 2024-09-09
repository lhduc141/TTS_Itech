import express from "express";
import {
    getAboutUs, getAllFieldPost, getAllPost,
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
userRoutes.get("/all-field-post", getAllFieldPost);
userRoutes.get("/fields-detail/:field_id", getFieldsDetail)
userRoutes.get("/why-us", getWhyUs);
userRoutes.get("/feedback", getFeedback);
userRoutes.get("/customer", getCustomer);
userRoutes.get("/projects", getProjectsList);
userRoutes.get("/detail-information/:cpn_id", getDetailInformation);
userRoutes.get("/post", getAllPost);


export default userRoutes;