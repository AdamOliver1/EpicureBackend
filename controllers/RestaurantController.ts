import { inject, injectable } from "inversify";
import { container, TYPES } from "../factory/inversify.config";
import { IRestaurantHandler } from "../handlers/interfaces/modelsInterfaces";
import BaseController from "./BaseController";

@injectable()
export class RestaurantController extends BaseController {
  handler: IRestaurantHandler;// = container.get<IRestaurantHandler>(
  //   TYPES.IRestaurantHandler
  // );
  constructor(protected readonly restaurantHandler: IRestaurantHandler) // @inject(TYPES.IRestaurantHandler)
  // protected readonly restaurantHandler: IRestaurantHandler
  {
    super();
    this.handler = restaurantHandler;
  }
}
