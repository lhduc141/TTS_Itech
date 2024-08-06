import express from "express";
import cors from "cors";
import routeRoutes from "./routes/routeRoutes.js";
// import swaggerRouter from "./swagger/swagger.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use(express.static("."));

// app.use(swaggerRouter);
app.use(routeRoutes);

app.listen(8080);
export default app;

