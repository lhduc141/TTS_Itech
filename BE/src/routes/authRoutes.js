import express from "express";
import {forgetPassword, login, logout} from "../controllers/authController.js";

const authRoutes = express.Router();

authRoutes.post("/login", login);
authRoutes.post("/logout", logout);
authRoutes.post("/forgetPassword", forgetPassword);

export default authRoutes;

