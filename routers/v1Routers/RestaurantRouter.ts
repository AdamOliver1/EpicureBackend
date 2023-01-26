import { RestaurantHandler } from "../../handlers/RestaurantHandler";
import express, { Request, Response, Application } from "express";
import { RestaurantController } from "../../controllers/RestaurantController";
import { RestaurantRepository } from "../../db/repositories/RestaurantRepository";
import { container } from "../../factory/inversify.config";
import { DishController } from "../../controllers/DishController";
import TYPES from "../../factory/types";
import { authUpdater } from "../../middlewares/auth/observerAuth";
import { authCRUD } from "../../middlewares/auth/operatorAuth";

const RestaurantRouter = express.Router();

const controller = container.get<RestaurantController>(
  TYPES.RestaurantController
);

RestaurantRouter.get("/", controller.getAll);
RestaurantRouter.get("/limited", controller.getLimited);
RestaurantRouter.get("/:id", controller.getById);
RestaurantRouter.put("/:id", authUpdater, controller.update);
RestaurantRouter.put("/disable/:id",  [authUpdater, authCRUD], controller.Disable);
RestaurantRouter.post("/", [authUpdater, authCRUD], controller.create);
RestaurantRouter.delete(
  "/:id",
  [authUpdater, authCRUD],
  controller.deletePermanently
);

export { RestaurantRouter };
