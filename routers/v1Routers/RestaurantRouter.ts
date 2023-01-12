import { RestaurantHandler } from "../../handlers/RestaurantHandler";
import express, { Request, Response, Application } from "express";
import { RestaurantController } from "../../controllers/RestaurantController";
import { RestaurantRepository } from "../../repositories/RestaurantRepository";

const RestaurantRouter = express.Router();

const controller = new RestaurantController(
  new RestaurantHandler(new RestaurantRepository())
);

// const controller = new RestaurantController();

RestaurantRouter.get("/", controller.getAll);
RestaurantRouter.put("/:id", controller.update);
RestaurantRouter.put("/disable/:id", controller.Disable);
RestaurantRouter.post("/", controller.create);
RestaurantRouter.delete("/:id", controller.deletePermanently);

export { RestaurantRouter };
