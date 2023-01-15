import { injectable } from "inversify";
import IChef from "../../models/Chef";
import IDish from "../../models/Dish";
import IRestaurant from "../../models/Restaurant";
import IModel from "../dbModels/IModel";
import { IRepository } from "./IRepository";

// export interface IModelRepository extends IRepository<IModel> {}
export interface IChefRepository extends IRepository<IChef> {
    filterAllStrings(text: string): Promise<IChef[]>;
}
export interface IDishRepository extends IRepository<IDish> {
  filterAllStrings(text: string): Promise<IDish[]>;
}
export interface IRestaurantRepository extends IRepository<IRestaurant> {}
