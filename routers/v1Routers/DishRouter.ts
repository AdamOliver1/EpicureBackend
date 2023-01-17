import { DishRepository } from "../../db/repositories/DishRepository";
import { DishHandler } from "./../../handlers/DishHandler";
import { DishController } from "./../../controllers/DishController";
import express from "express";
import TYPES from "../../factory/types";
import { container } from "../../factory/inversify.config";

const DishRouter = express.Router();

const controller = container.get<DishController>(TYPES.DishController);

DishRouter.get("/", controller.getAll);
DishRouter.get("/limited", controller.getLimitedDishes);
DishRouter.get("/:id", controller.getById);
DishRouter.put("/:id", controller.update);
DishRouter.put("/disable/:id", controller.Disable);
DishRouter.post("/", controller.create);
DishRouter.delete("/:id", controller.deletePermanently);

export { DishRouter };
