import IModel from "./IModel";
import IRestaurant from "./Restaurant";
import { Tags } from "./Tags";

export default interface IDish extends IModel {
  price: number;
  ingredients?: string[];
  tags?: Tags[];
  restaurant: IRestaurant;
}
