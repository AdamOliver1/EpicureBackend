import { IRestaurantRepository } from "../repositories/Interfaces/ModelsRepositories";
import { IRestaurant } from "../models/Restaurant";
import IModel from "../models/IModel";
import { IRestaurantHandler } from "./interfaces/modelsInterfaces";
import { BaseHandler } from "./BaseHandler";
import { inject, injectable } from "inversify";
import { TYPES } from "../factory/inversify.config";

@injectable()
export class RestaurantHandler
  extends BaseHandler
  implements IRestaurantHandler
{
  // @inject(TYPES.IRestaurantRepository)
  protected repository: IRestaurantRepository;

  constructor( protected readonly restaurantRepository: IRestaurantRepository) // @inject(TYPES.IRestaurantRepository)
  {
    super();
    this.repository = restaurantRepository;
  }

  deletePermanently(id: string): Promise<any> {
    throw new Error("Method not implemented.");
  }
}
