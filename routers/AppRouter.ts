import express, { Request, Response, Application } from "express";
import { v1Router } from "./v1Routers/v1Router";
const appRouter = express.Router();

appRouter.use("/api/v1",v1Router);

export { appRouter };
