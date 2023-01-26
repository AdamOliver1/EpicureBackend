import { ChefController } from "./../../controllers/ChefController";
import express from "express";
import TYPES from "../../factory/types";
import { container } from "../../factory/inversify.config";
import { authUpdater } from "../../middlewares/auth/observerAuth";
import { authCRUD } from "../../middlewares/auth/operatorAuth";

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
ChefRouter.get("/:id", controller.getById);
ChefRouter.put("/:id", authUpdater, controller.update);
ChefRouter.put("/chefweek/:id", authUpdater, controller.updateChefOfTheWeek);
ChefRouter.put("/disable/:id",  [authUpdater, authCRUD], controller.Disable);
ChefRouter.post("/", [authUpdater, authCRUD], controller.create);
ChefRouter.delete("/:id",[authUpdater, authCRUD],controller.deletePermanently);

export { ChefRouter };
