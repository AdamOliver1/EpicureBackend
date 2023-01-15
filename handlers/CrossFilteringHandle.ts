import {  IChefHandler,  IDishHandler,  IRestaurantHandler} from "./interfaces/modelsInterfaces";
import { BaseHandler } from "./BaseHandler";
import { inject, injectable } from "inversify";
import TYPES from "../factory/types";
import IModel from "../db/dbModels/IModel";
import { ICrossFilteringHandle } from "./interfaces/ICrossFilteringHandle";

@injectable()
export class CrossFilteringHandle implements ICrossFilteringHandle {
  constructor(
    @inject(TYPES.IDishHandler)
    protected readonly dishHandler: IDishHandler,
    @inject(TYPES.IRestaurantHandler)
    protected readonly restaurantHandler: IRestaurantHandler,
    @inject(TYPES.IChefHandler)
    protected readonly chefHandler: IChefHandler
  ) {}

  async filterThroughAll(text: string): Promise<{}> {
    const res = await Promise.all([
      this.chefHandler.filterAllStrings(text),
      this.dishHandler.filterAllStrings(text),
      this.restaurantHandler.filterByName(text),
    ]);
    return ({
      chefs:res[0],
      dishes:res[1],
      restaurants:res[2]
    })
    return res;
  }
}
