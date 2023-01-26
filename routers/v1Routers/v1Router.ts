import express from "express";
import { error } from "../../middlewares/error";
import { AuthRouter } from "./AuthRouter";
import { ChefRouter } from "./ChefRouter";
import { DishRouter } from "./DishRouter";
import FilterRouter from "./FilterRouter";
import { RestaurantRouter } from "./RestaurantRouter";

const v1Router = express.Router();
v1Router.use("/restaurant", RestaurantRouter);
v1Router.use("/chef", ChefRouter);
v1Router.use("/dish", DishRouter);
v1Router.use("/filter", FilterRouter);
v1Router.use("/auth", AuthRouter);
v1Router.use("*", error);

export { v1Router };
