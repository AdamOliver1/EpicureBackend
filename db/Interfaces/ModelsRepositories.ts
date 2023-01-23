import { injectable } from "inversify";
import IChef from "../../models/Chef";
import IDish from "../../models/Dish";
import IRestaurant from "../../models/Restaurant";
import IModel from "../../models/IModel";
import { IRepository } from "./IRepository";

export interface IChefRepository extends IRepository<IChef> {
  filterAllStrings(text: string): Promise<IChef[]>;
  getChefOfTheWeek():Promise<IChef| null>;
}

export interface IDishRepository extends IRepository<IDish> {
  filterAllStrings(text: string): Promise<IDish[]>;
  getLimitedDishes(limit:number): Promise<IDish[]> ;
}

export interface IRestaurantRepository extends IRepository<IRestaurant> {
  getLimited(limit: number): Promise<IRestaurant[]> ;
}
