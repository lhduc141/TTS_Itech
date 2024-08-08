import express from "express";
import {forgetPassword, login} from "../controllers/authController.js";

const authRoutes = express.Router();

authRoutes.get("/login", login);
authRoutes.put("/forgetPassword", forgetPassword);

export default authRoutes;

