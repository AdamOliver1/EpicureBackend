import { error } from "./middlewares/error";
import "reflect-metadata";
import express, { Application } from "express";
import { connectToDb } from "./startup/db";
import * as dotenv from "dotenv";
import cors from "cors";
import { initData } from "./startup/initData";
import { appRouter } from "./routers/AppRouter";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./startup/swagger";
import cookieParser from "cookie-parser";
dotenv.config();
const app: Application = express();

const allowedOrigins = ["http://localhost:3000", "http://localhost:4200"];

app.use(
  cors({
    credentials: true,
    origin: '*',
    // allowedHeaders:'Authorization'
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true })); //
app.use(cookieParser());
initData();

app.use(appRouter);
app.use(error);

connectToDb();
app.listen(process.env.PORT || 8000, (): void => {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log(`Server Running here`);
});
