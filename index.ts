import 'reflect-metadata';
import express, {Request,Response,Application} from 'express';
import {connectToDb} from './startup/db';
import * as dotenv from 'dotenv';
// import  * as cors from 'cors';
import { initData } from './startup/initData';
import { appRouter } from './routers/AppRouter';
dotenv.config();
const app:Application = express();
// app.use(cors());


app.use(express.json());
app.use(express.urlencoded({extended: true}));
initData();
app.use(appRouter);
connectToDb();
app.listen( process.env.PORT || 8000, ():void => {
    console.log(`Server Running here`);
  }); 