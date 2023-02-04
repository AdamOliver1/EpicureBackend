import { ChefController } from "./../../controllers/ChefController";
import express from "express";
import TYPES from "../../factory/types";
import { container } from "../../factory/inversify.config";
import { authUpdater } from "../../middlewares/auth/updaterAuth";
import { validator } from "../../middlewares/validator";
import { authCRUD } from "../../middlewares/auth/operatorAuth";
import {
  loginSchema,
  dishSchema,
  chefSchema,
  restaurantSchema,
} from "../../helpers/validationHelper";
const ChefRouter = express.Router();
const controller = container.get<ChefController>(TYPES.ChefController);
/**
 * @swagger
 * /chef:
 *   get:
 *     summary:
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 */

//#region NON ADMIN
ChefRouter.get("/", controller.getAll);
ChefRouter.get("/chefweek", controller.getChefOfTheWeek);
ChefRouter.get("/:id", controller.getById);
//#endregion

//#region ADMIN UPDATER
ChefRouter.use(authUpdater);
ChefRouter.put("/:id", validator(chefSchema), controller.update);
ChefRouter.put("/chefweek/:id", controller.updateChefOfTheWeek);
//#endregion

//#region ADMIN CRUD
ChefRouter.use(authCRUD);
ChefRouter.put("/disable/:id", controller.Disable);
ChefRouter.post("/", validator(chefSchema), controller.create);
ChefRouter.delete("/:id", controller.deletePermanently);
//#endregion
export { ChefRouter };
