import express from "express";
import {
    postAboutUs,
    postCarousel,
    postContact, postCustomers,
    postFeedback,
    postFieldDetail,
    postFieldsList,
    postMember, postProjects,
    postWhy,
    putAboutUs,
    putCarousel,
    putContact, putCustomers,
    putDetailInformation,
    putFeedback,
    putFieldDetail,
    putFieldsList,
    putMember, putProjects,
    putWhy
} from "../controllers/adminController.js";

const adminRoutes = express.Router();

adminRoutes.put("/change-detail-information", putDetailInformation);

adminRoutes.put("/edit-carousel/:crs_id", putCarousel);
adminRoutes.post("/add-carousel", postCarousel);

adminRoutes.put("/feedback/:fb_id", putFeedback);
adminRoutes.post("/add-feedback", postFeedback);

adminRoutes.put("/why/:why_id", putWhy);
adminRoutes.post("/add-why", postWhy);

adminRoutes.put("/about-us/:aup_id", putAboutUs);
adminRoutes.post("/add-about-us", postAboutUs);

adminRoutes.put("/members/:mem_id", putMember);
adminRoutes.post("/add-members", postMember);

adminRoutes.put("/contact/:contact_id", putContact);
adminRoutes.post("/add-contact", postContact);

adminRoutes.put("/fieldsList", putFieldsList);
adminRoutes.post("/add-fieldsList", postFieldsList);

adminRoutes.put("/field-detail/:field_id", putFieldDetail);
adminRoutes.post("/add-field-detail/:field_id", postFieldDetail);

adminRoutes.put("/projects/:projects_id", putProjects);
adminRoutes.post("/add-projects", postProjects);

adminRoutes.put("/customers/:customer_id", putCustomers);
adminRoutes.post("/add-customers", postCustomers);

export default adminRoutes;