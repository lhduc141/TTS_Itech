import express from "express";
import {getAdmin} from "../controllers/adminController.js";

const adminRoutes = express.Router();

adminRoutes.get("/get-detail", getAdmin)

export default adminRoutes;