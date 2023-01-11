import { RestaurantHandler } from "../../handlers/RestaurantHandler";
import express, { Request, Response, Application } from "express";
import { RestaurantController } from "../../controllers/RestaurantController";
import { RestaurantRepository } from "../../repositories/RestaurantRepository";

const RestaurantRouter = express.Router();

const controller = new RestaurantController(
  new RestaurantHandler(new RestaurantRepository())
);

RestaurantRouter.get("/restaurant", controller.getAll);
RestaurantRouter.put("/restaurant/:id", controller.update);
RestaurantRouter.post("/restaurant", controller.create);
RestaurantRouter.delete("/restaurant/:id", controller.delete);

export { RestaurantRouter };
