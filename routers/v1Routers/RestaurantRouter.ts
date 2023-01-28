import express, {  } from "express";
import { RestaurantController } from "../../controllers/RestaurantController";
import { container } from "../../factory/inversify.config";
import TYPES from "../../factory/types";
import { restaurantSchema } from "../../helpers/validationHelper";
import { authUpdater } from "../../middlewares/auth/observerAuth";
import { authCRUD } from "../../middlewares/auth/operatorAuth";
import { validator } from "../../middlewares/validator";

const RestaurantRouter = express.Router();

const controller = container.get<RestaurantController>(
  TYPES.RestaurantController
);

//#region  NON ADMIN
RestaurantRouter.get("/", controller.getAll);
RestaurantRouter.get("/limited", controller.getLimited);
RestaurantRouter.get("/by-chef/:id", controller.getByChef);
RestaurantRouter.get("/:id", controller.getById);
//#endregion

//#region ADMIN UPDATER
RestaurantRouter.use(authUpdater);
RestaurantRouter.put("/:id",validator(restaurantSchema),controller.update);
//#endregion

//#region ADMIN CRUD
RestaurantRouter.use(authCRUD);
RestaurantRouter.put("/disable/:id", controller.Disable);
RestaurantRouter.post("/",validator(restaurantSchema), controller.create);
RestaurantRouter.delete("/:id",controller.deletePermanently);
//#endregion

export { RestaurantRouter };
