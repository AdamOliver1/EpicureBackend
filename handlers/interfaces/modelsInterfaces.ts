import IChef from "../../models/Chef";
import IDish from "../../models/Dish";
import IRestaurant from "../../models/Restaurant";
import { IHandler } from "./IHandler";

export interface IChefHandler extends IHandler<IChef> {
    filterAllStrings(text: string): Promise<IChef[]>;
    getChefOfTheWeek(): Promise<IChef | null>;
}

export interface IDishHandler extends IHandler<IDish> {
    filterAllStrings(text: string): Promise<IDish[]> ;
    getLimitedDishes(limit:number): Promise<IDish[]>;
}

export interface IRestaurantHandler extends IHandler<IRestaurant> {
    getLimited(limit:number): Promise<IRestaurant[]>;
}
