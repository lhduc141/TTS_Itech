import express from "express";
import adminRoutes from "./adminRoutes.js";

const routeRoutes = express.Router();

routeRoutes.use("/admin", adminRoutes);

export default routeRoutes;