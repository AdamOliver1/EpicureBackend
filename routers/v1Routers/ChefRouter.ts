import { ChefRepository } from "./../../repositories/ChefRepository";
import { ChefHandler } from "./../../handlers/ChefHandler";
import { ChefController } from "./../../controllers/ChefController";
import express from "express";
import { container, TYPES } from "../../factory/inversify.config";

const ChefRouter = express.Router();
// const controller = new ChefController(new ChefHandler(new ChefRepository()));
console.log("dffsddssdfs");

const controller = container.get<ChefController>(TYPES.ChefController);

ChefRouter.get("/", controller.getAll);
ChefRouter.put("/:id", controller.update);
ChefRouter.put("/disable/:id", controller.Disable);
ChefRouter.post("/", controller.create);
ChefRouter.delete("/:id", controller.deletePermanently);

export { ChefRouter };
 