import { DishRepository } from "../../db/repositories/DishRepository";
import { DishHandler } from "./../../handlers/DishHandler";
import { DishController } from "./../../controllers/DishController";
import express from "express";
import TYPES from "../../factory/types";
import { container } from "../../factory/inversify.config";
import { authUpdater } from "../../middlewares/auth/observerAuth";
import { authCRUD } from "../../middlewares/auth/operatorAuth";

const DishRouter = express.Router();

const controller = container.get<DishController>(TYPES.DishController);

//#region NON ADMIN
DishRouter.get("/", controller.getAll);
DishRouter.get("/limited", controller.getLimitedDishes);
DishRouter.get("/:id", controller.getById);
//#endregion

//#region Admin
DishRouter.put("/:id", authUpdater, controller.update);
DishRouter.put("/disable/:id",  [authUpdater, authCRUD], controller.Disable);
DishRouter.post("/", controller.create);
// DishRouter.post("/", [authUpdater, authCRUD], controller.create);
//#endregion

DishRouter.delete(
  "/:id",
  [authUpdater, authCRUD],
  controller.deletePermanently
);

export { DishRouter };
