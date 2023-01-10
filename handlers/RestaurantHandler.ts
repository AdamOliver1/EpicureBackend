import { IHandler } from "./interfaces/IHandler";
import { RestaurantRepository } from "./../repositories/RestaurantRepository";
import { IRestaurant } from "../models/Restaurant";
import { IRepository } from "../repositories/Interfaces/IRepository";
import IModel from "../models/IModel";

export interface IRestaurantHandler extends IHandler {}

export class RestaurantHandler implements IRestaurantHandler {
  repo: RestaurantRepository;

  constructor(repository: RestaurantRepository) {
    this.repo = repository;
  }
  async update(id: string, item: IRestaurant): Promise<IRestaurant | null> {
    return await this.repo.update(id, item);
  }
  async create(restaurant: IRestaurant): Promise<IRestaurant> {
    return await this.repo.create(restaurant);
  }

  
}
