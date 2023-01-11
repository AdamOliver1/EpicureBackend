import { IRestaurantHandler } from "../handlers/interfaces/modelsInterfaces";
import { BaseController } from "./BaseController";

export class RestaurantController extends BaseController{
  constructor(handler: IRestaurantHandler) {
   super(handler);
  }

}
