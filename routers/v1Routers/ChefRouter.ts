import { ChefController } from "./../../controllers/ChefController";
import express from "express";
import TYPES from "../../factory/types";
import { container } from "../../factory/inversify.config";
const ChefRouter = express.Router();

const controller = container.get<ChefController>(TYPES.ChefController);
// /**
//  * @swagger
//  * /chef:
//  *   get:
//  *     summary: 
//  *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
// */
ChefRouter.get("/", controller.getAll);
ChefRouter.get("/chefweek", controller.getChefOfTheWeek);
ChefRouter.post("/", controller.create);
ChefRouter.get("/:id", controller.getById);
ChefRouter.put("/:id", controller.update);
ChefRouter.put("/disable/:id", controller.Disable);
ChefRouter.put("/chefweek/:id", controller.updateChefOfTheWeek);
ChefRouter.delete("/:id", controller.deletePermanently);

export { ChefRouter };
