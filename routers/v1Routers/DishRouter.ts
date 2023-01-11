import { DishRepository } from './../../repositories/DishRepository';
import { DishHandler } from './../../handlers/DishHandler';
import { DishController } from './../../controllers/DishController';
import express from "express";

const DishRouter = express.Router();

const controller = new DishController(
  new DishHandler(new DishRepository())
);

DishRouter.get("/dish", controller.getAll);
DishRouter.put("/dish/:id", controller.update);
DishRouter.post("/dish", controller.create);
DishRouter.delete("/dish/:id", controller.delete);

export { DishRouter };
