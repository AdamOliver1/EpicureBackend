import TYPES from "./types";
import { RestaurantController } from "./../controllers/RestaurantController";
import { DishController } from "./../controllers/DishController";
import { ChefController } from "./../controllers/ChefController";
import { RestaurantHandler } from "./../handlers/RestaurantHandler";
import {  IDishHandler,  IRestaurantHandler,} from "./../handlers/interfaces/modelsInterfaces";
import { Container } from "inversify";
import { ChefHandler } from "../handlers/ChefHandler";
import { IChefHandler } from "../handlers/interfaces/modelsInterfaces";
import { ChefRepository } from "../db/repositories/ChefRepository";
import {  IChefRepository,  IDishRepository,  IRestaurantRepository,} from "../db/Interfaces/ModelsRepositories";
import { DishRepository } from "../db/repositories/DishRepository";
import { RestaurantRepository } from "../db/repositories/RestaurantRepository";
import { DishHandler } from "../handlers/DishHandler";
import { FilterController } from "../controllers/FilterController";
import { ICrossFilteringHandle } from "../handlers/interfaces/ICrossFilteringHandle";
import { CrossFilteringHandle } from "../handlers/CrossFilteringHandle";

const container = new Container();

// repositories
container
  .bind<IChefRepository>(TYPES.IChefRepository)
  .to(ChefRepository)
  .inSingletonScope();
container
  .bind<IDishRepository>(TYPES.IDishRepository)
  .to(DishRepository)
  .inSingletonScope();
container
  .bind<IRestaurantRepository>(TYPES.IRestaurantRepository)
  .to(RestaurantRepository)
  .inSingletonScope();

//handlers
container
  .bind<IChefHandler>(TYPES.IChefHandler)
  .to(ChefHandler)
  .inSingletonScope();
container
  .bind<IDishHandler>(TYPES.IDishHandler)
  .to(DishHandler)
  .inSingletonScope();
container
  .bind<IRestaurantHandler>(TYPES.IRestaurantHandler)
  .to(RestaurantHandler)
  .inSingletonScope();
  container
  .bind<ICrossFilteringHandle>(TYPES.ICrossFilteringHandle)
  .to(CrossFilteringHandle)
  .inSingletonScope();

// controllers
container
.bind<ChefController>(TYPES.ChefController)
.to(ChefController);
container
.bind<DishController>(TYPES.DishController)
.to(DishController);
container
  .bind<RestaurantController>(TYPES.RestaurantController)
  .to(RestaurantController);
container
.bind<FilterController>(TYPES.FilterController)
.to(FilterController);

export { container };
