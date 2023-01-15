import IModel from "../db/dbModels/IModel";
import IRestaurant from "./Restaurant";

export default interface IDish extends IModel {
    price: number;
    ingredients?: string[];
    tags?: string[];
    restaurant: IRestaurant;
  }