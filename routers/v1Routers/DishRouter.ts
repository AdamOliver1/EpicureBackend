import { DishRepository } from "./../../repositories/DishRepository";
import { DishHandler } from "./../../handlers/DishHandler";
import { DishController } from "./../../controllers/DishController";
import express from "express";

const DishRouter = express.Router();

const controller = new DishController(new DishHandler(new DishRepository()));
// const controller = new DishController();

DishRouter.get("/", controller.getAll);
DishRouter.put("/:id", controller.update);
DishRouter.put("/disable/:id", controller.Disable);
DishRouter.post("/", controller.create);
DishRouter.delete("/:id", controller.deletePermanently);

export { DishRouter };
