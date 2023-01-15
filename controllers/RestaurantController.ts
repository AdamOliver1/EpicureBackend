import { inject, injectable } from "inversify";
import TYPES from "../factory/types";
import { IRestaurantHandler } from "../handlers/interfaces/modelsInterfaces";
import BaseController from "./BaseController";

@injectable()
export class RestaurantController extends BaseController {
  
  constructor(
    @inject(TYPES.IRestaurantHandler)
    protected readonly handler: IRestaurantHandler
  ) {
    super();
  }
}
