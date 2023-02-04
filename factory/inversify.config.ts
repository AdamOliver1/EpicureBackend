import TYPES from "./types";
import { RestaurantController } from "./../controllers/RestaurantController";
import { DishController } from "./../controllers/DishController";
import { ChefController } from "./../controllers/ChefController";
import { RestaurantHandler } from "./../handlers/RestaurantHandler";
import {
  // IAuthHandler,
  IDishHandler,
  IRestaurantHandler,
  // IUserHandler,
} from "./../handlers/interfaces/modelsInterfaces";
import { Container } from "inversify";
import { ChefHandler } from "../handlers/ChefHandler";
import { IChefHandler } from "../handlers/interfaces/modelsInterfaces";
import { ChefRepository } from "../DAL/repositories/ChefRepository";
import {
  IChefRepository,
  IDishRepository,
  IRestaurantRepository,
  IUserRepository,
} from "../DAL/Interfaces/ModelsRepositories";
import { DishRepository } from "../DAL/repositories/DishRepository";
import { RestaurantRepository } from "../DAL/repositories/RestaurantRepository";
import { DishHandler } from "../handlers/DishHandler";
import { FilterController } from "../controllers/FilterController";
import { ICrossFilteringHandle } from "../handlers/interfaces/ICrossFilteringHandle";
import { CrossFilteringHandle } from "../handlers/CrossFilteringHandle";
// import { UserHandler } from "../handlers/UserHandler";
// import { AuthHandler } from "../handlers/authHandler";
import { UserRepository } from "../DAL/repositories/UserRepository";
import { AuthController } from "../controllers/authController";
import { ICognitoUserPoolHelper } from "../handlers/interfaces/ICognitoUserPoolHelper";
import { CognitoUserPoolHelper } from "../handlers/cognitoUserPoolHandler";

const container = new Container();
//TODO change names and check nest js
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
container
  .bind<IUserRepository>(TYPES.IUserRepository)
  .to(UserRepository)
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
// container
//   .bind<IUserHandler>(TYPES.IUserHandler)
//   .to(UserHandler)
//   .inSingletonScope();
// container //
//   .bind<IAuthHandler>(TYPES.IAuthHandler)
//   .to(AuthHandler)
//   .inSingletonScope();
  container //
  .bind<ICognitoUserPoolHelper>(TYPES.ICognitoUserPoolHelper)
  .to(CognitoUserPoolHelper)
  .inSingletonScope();
  
// controllers
container.bind<ChefController>(TYPES.ChefController).to(ChefController);
container.bind<DishController>(TYPES.DishController).to(DishController);
container
  .bind<RestaurantController>(TYPES.RestaurantController)
  .to(RestaurantController);
container.bind<FilterController>(TYPES.FilterController).to(FilterController);
container.bind<AuthController>(TYPES.AuthController).to(AuthController);

export { container };
