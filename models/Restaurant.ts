import IModel from "./IModel";
import IChef from "./Chef";

export default interface IRestaurant extends IModel {
  image?: string;
  chef: IChef;
  stars:number;
}
