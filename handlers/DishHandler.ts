import { IDishRepository } from "../DAL/Interfaces/ModelsRepositories";
import {
  IDishHandler,
  IRestaurantHandler,
} from "./interfaces/modelsInterfaces";
import { BaseHandler } from "./BaseHandler";
import { inject, injectable } from "inversify";
import TYPES from "../factory/types";
import IDish from "../models/Dish";

@injectable()
export class DishHandler extends BaseHandler<IDish> implements IDishHandler {
  constructor(
    @inject(TYPES.IDishRepository)
    protected readonly restaurantRepository: IDishRepository,
    @inject(TYPES.IRestaurantHandler)
    protected readonly restaurantHandler: IRestaurantHandler
  ) {
    super();
  }

  async filterAllStrings(name: string): Promise<IDish[]> {
    return await this.restaurantRepository.filterAllStrings(name);
  }

  async deletePermanently(id: string): Promise<any> {
    return await this.restaurantRepository.deletePermanently(id);
  }

  async getLimitedDishes(limit: number): Promise<IDish[]> {
    return await this.restaurantRepository.getLimitedDishes(limit);
  }

  async disable(id: string): Promise<any> {
    // const dish = await this.repository.findById(id);
    // if(dish?.restaurant._id){
    //   this.restaurantHandler.disable(dish?.restaurant._id);
    // }
    return await this.restaurantRepository.Disable(id);
  }
}
