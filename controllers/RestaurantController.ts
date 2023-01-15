import { inject, injectable } from "inversify";
import TYPES from "../factory/types";
import { IRestaurantHandler } from "../handlers/interfaces/modelsInterfaces";
import BaseController from "./BaseController";

@injectable()
export class RestaurantController extends BaseController {
  // handler: IRestaurantHandler; // = container.get<IRestaurantHandler>(
  //   TYPES.IRestaurantHandler
  // );
  constructor(
    @inject(TYPES.IRestaurantHandler) protected readonly handler: IRestaurantHandler // @inject(TYPES.IRestaurantHandler) // protected readonly restaurantHandler: IRestaurantHandler
  ) {
    super();
    // this.handler = restaurantHandler;
  }
}
