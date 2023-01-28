import { injectable } from "inversify";
import IChef from "../../models/Chef";
import IDish from "../../models/Dish";
import IRestaurant from "../../models/Restaurant";
import IModel from "../../models/IModel";
import { IRepository } from "./IRepository";
import IUser from "../../models/User";

export interface IChefRepository extends IRepository<IChef> {
  filterAllStrings(text: string): Promise<IChef[]>;
  getChefOfTheWeek():Promise<IChef| null>;
  updateChefOfTheWeek(id:string): Promise<IChef | null>;
}

export interface IDishRepository extends IRepository<IDish> {
  filterAllStrings(text: string): Promise<IDish[]>;
  getLimitedDishes(limit:number): Promise<IDish[]> ;
}

export interface IRestaurantRepository extends IRepository<IRestaurant> {
  getByChef(chefId:string): Promise<IRestaurant[]>;
  getLimited(limit: number): Promise<IRestaurant[]> ;
}


export interface IUserRepository extends IRepository<IUser> {
  findOne(compare:{}): Promise<IUser | null> ;
  createUser(username:string,password:string): Promise<IUser>;
}
