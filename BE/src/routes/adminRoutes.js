import express from "express";
import {
    getAdminDetails,
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

adminRoutes.put("/detail-information/:cpn_id", putDetailInformation);

adminRoutes.put("/carousel/:img_id", putCarousel);
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

adminRoutes.put("/fieldsList/:field_id", putFieldsList);
adminRoutes.post("/add-fieldsList", postFieldsList);

adminRoutes.put("/field-detail/:fPost_id", putFieldDetail);
adminRoutes.post("/add-field-detail/:field_id", postFieldDetail);

adminRoutes.put("/projects/:projects_id", putProjects);
adminRoutes.post("/add-projects", postProjects);

adminRoutes.put("/customers/:customer_id", putCustomers);
adminRoutes.post("/add-customers", postCustomers);

adminRoutes.get("/detail/:id", getAdminDetails)

export default adminRoutes;