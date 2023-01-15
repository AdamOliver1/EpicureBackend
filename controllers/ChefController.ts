import { inject, injectable } from "inversify";
import TYPES from "../factory/types";
import { IChefHandler } from "../handlers/interfaces/modelsInterfaces";
import BaseController from "./BaseController";

@injectable()
export class ChefController extends BaseController {
 
  constructor(
    @inject(TYPES.IChefHandler) protected readonly handler: IChefHandler 
  ) {
    super();
    
  }
}
