import express, { Request, Response, Application } from "express";
import { RestaurantRouter } from "./RestaurantRouter";

const v1Router = express.Router();
v1Router.use('/v1',RestaurantRouter)


export{
    v1Router
}