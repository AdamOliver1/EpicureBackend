import express, { Request, Response, Application } from "express";
import { ChefRouter } from "./ChefRouter";
import { DishRouter } from "./DishRouter";
import { RestaurantRouter } from "./RestaurantRouter";

const v1Router = express.Router();
v1Router.use('/v1',RestaurantRouter)
v1Router.use('/v1',ChefRouter)
v1Router.use('/v1',DishRouter)


export{
    v1Router
}