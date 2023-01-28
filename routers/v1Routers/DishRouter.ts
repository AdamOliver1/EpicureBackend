import { DishRepository } from "../../DAL/repositories/DishRepository";
import { DishHandler } from "./../../handlers/DishHandler";
import { DishController } from "./../../controllers/DishController";
import express from "express";
import TYPES from "../../factory/types";
import { container } from "../../factory/inversify.config";
import { authUpdater } from "../../middlewares/auth/observerAuth";
import { authCRUD } from "../../middlewares/auth/operatorAuth";
import { validator } from "../../middlewares/validator";
import { dishSchema } from "../../helpers/validationHelper";

const DishRouter = express.Router();

const controller = container.get<DishController>(TYPES.DishController);

//#region NON ADMIN
DishRouter.get("/", controller.getAll);
DishRouter.get("/limited", controller.getLimitedDishes);
DishRouter.get("/:id", controller.getById);
//#endregion

//#region Admin
DishRouter.use(authUpdater)
DishRouter.put("/:id",validator(dishSchema), controller.update);
//#endregion

//#region Admin CRUD
DishRouter.use(authCRUD)
DishRouter.put("/disable/:id", controller.Disable);
DishRouter.post("/",validator(dishSchema), controller.create);
DishRouter.delete("/:id",controller.deletePermanently);
//#endregion


export { DishRouter };
