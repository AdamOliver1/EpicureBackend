import { inject, injectable } from "inversify";
import TYPES from "../factory/types";
import { IChefHandler } from "../handlers/interfaces/modelsInterfaces";
import BaseController from "./BaseController";

@injectable()
export class ChefController extends BaseController {
  handler: IChefHandler;
  // handler: IChefHandler = container.get<IChefHandler>(TYPES.IChefHandler);
  constructor(@inject(TYPES.IChefHandler) protected readonly chefHandler: IChefHandler) // @inject(TYPES.IChefHandler) protected readonly chefHandler: IChefHandler
  {
    super();
console.log("ChefController");

    // this.handler = container.get<IChefHandler>(TYPES.IChefHandler);
    this.handler = chefHandler;
  }
}
