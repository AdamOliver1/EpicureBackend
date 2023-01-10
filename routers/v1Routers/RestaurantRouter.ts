import { RestaurantHandler } from "../../handlers/RestaurantHandler";
import express, { Request, Response, Application } from "express";
import { RestaurantController } from "../../controllers/RestaurantController";
import { RestaurantRepository } from "../../repositories/RestaurantRepository";

const RestaurantRouter = express.Router();

const controller = new RestaurantController(
  new RestaurantHandler(new RestaurantRepository())
);

RestaurantRouter.post("/create", controller.create);
RestaurantRouter.post("/update", controller.update);

export { RestaurantRouter };
