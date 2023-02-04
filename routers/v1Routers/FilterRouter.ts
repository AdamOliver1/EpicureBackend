import express from "express";
import { container } from "../../factory/inversify.config";
import TYPES from "../../factory/types";
import { FilterController } from "../../controllers/FilterController";
import { authUpdater } from "../../middlewares/auth/updaterAuth";

const FilterRouter = express.Router();
const controller = container.get<FilterController>(TYPES.FilterController);
FilterRouter.get("/", controller.filterThroughAll);
export default FilterRouter;
