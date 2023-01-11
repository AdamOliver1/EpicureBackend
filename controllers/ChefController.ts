import { IChefHandler } from "../handlers/interfaces/modelsInterfaces";
import { BaseController } from "./BaseController";

export class ChefController extends BaseController{
  constructor(handler: IChefHandler) {
   super(handler);
  }

}
