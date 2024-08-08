import express from "express";
import adminRoutes from "./adminRoutes.js";
import authRoutes from "./authRoutes.js";
import userRoutes from "./userRoutes.js";

const routeRoutes = express.Router();

//Main Routers
routeRoutes.use("/admin", adminRoutes);
routeRoutes.use("/user", userRoutes);
routeRoutes.use("/auth", authRoutes)


export default routeRoutes;