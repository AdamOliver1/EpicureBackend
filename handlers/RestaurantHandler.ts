import { IRestaurantRepository } from "../repositories/Interfaces/ModelsRepositories";
import { IRestaurant } from "../models/Restaurant";
import IModel from "../models/IModel";
import { IRestaurantHandler } from "./interfaces/modelsInterfaces";
import { BaseHandler } from "./BaseHandler";

export class RestaurantHandler extends BaseHandler implements IRestaurantHandler{
  constructor(repository: IRestaurantRepository) {
    super(repository);
  }
}
