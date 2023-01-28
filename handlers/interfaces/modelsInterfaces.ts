import IChef from "../../models/Chef";
import IDish from "../../models/Dish";
import IRestaurant from "../../models/Restaurant";
import IUser from "../../models/User";
import { IHandler } from "./IHandler";

export interface IChefHandler extends IHandler<IChef> {
  filterAllStrings(text: string): Promise<IChef[]>;
  getChefOfTheWeek(): Promise<IChef | null>;
  updateChefOfTheWeek(id: string): Promise<IChef | null>;
}

export interface IDishHandler extends IHandler<IDish> {
  filterAllStrings(text: string): Promise<IDish[]>;
  getLimitedDishes(limit: number): Promise<IDish[]>;
}

export interface IRestaurantHandler extends IHandler<IRestaurant> {
  getByChef(chefId:string): Promise<IRestaurant[]>;
  getLimited(limit: number): Promise<IRestaurant[]>;
}

export interface IUserHandler extends IHandler<IUser> {}

export interface IAuthHandler {
    VerifyLogin(username: string, password: string): Promise<{user:IUser,token:string}>
}
