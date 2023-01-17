import { ChefController } from "./../../controllers/ChefController";
import express from "express";
import TYPES from "../../factory/types";
import { container } from "../../factory/inversify.config";
const ChefRouter = express.Router();

const controller = container.get<ChefController>(TYPES.ChefController);

ChefRouter.get("/", controller.getAll);
ChefRouter.get("/:id", controller.getById);
ChefRouter.get("/chef-week/:id", controller.getChefOfTheWeek);
ChefRouter.put("/:id", controller.update);
ChefRouter.put("/disable/:id", controller.Disable);
ChefRouter.post("/", controller.create);
ChefRouter.delete("/:id", controller.deletePermanently);

export { ChefRouter };
