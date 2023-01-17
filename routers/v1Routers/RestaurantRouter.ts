import { RestaurantHandler } from "../../handlers/RestaurantHandler";
import express, { Request, Response, Application } from "express";
import { RestaurantController } from "../../controllers/RestaurantController";
import { RestaurantRepository } from "../../db/repositories/RestaurantRepository";
import { container } from "../../factory/inversify.config";
import { DishController } from "../../controllers/DishController";
import TYPES from "../../factory/types";

const RestaurantRouter = express.Router();

// const controller = new RestaurantController(
//   new RestaurantHandler(new RestaurantRepository())
// );
const controller = container.get<RestaurantController>(
  TYPES.RestaurantController
);

RestaurantRouter.get("/", controller.getAll);
RestaurantRouter.get("/limited", controller.getLimited);
RestaurantRouter.post("/", controller.create);
RestaurantRouter.get("/:id", controller.getById);
RestaurantRouter.put("/:id", controller.update);
RestaurantRouter.put("/disable/:id", controller.Disable);
RestaurantRouter.delete("/:id", controller.deletePermanently);

export { RestaurantRouter };
