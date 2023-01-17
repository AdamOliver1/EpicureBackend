import { errorHandler } from './middlewares/error';
import 'reflect-metadata';
import express, {Request,Response,Application} from 'express';
import {connectToDb} from './startup/db';
import * as dotenv from 'dotenv';
import cors from 'cors';
import { initData } from './startup/initData';
import { appRouter } from './routers/AppRouter';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './startup/swagger';


dotenv.config();
const app:Application = express();
const allowedOrigins = ['http://localhost:3000'];
const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors(options));
app.use(express.json());
app.use(express.urlencoded({extended: true})); //
initData();
app.use(appRouter);
app.use(errorHandler)

connectToDb();
app.listen( process.env.PORT || 8000, ():void => {
  app.use("/docs",swaggerUi.serve,swaggerUi.setup(swaggerSpec));
    console.log(`Server Running here`);
  }); 