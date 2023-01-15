import IModel from "../db/dbModels/IModel";
import IChef from "./Chef";

export default interface IRestaurant extends IModel {
  image?: string;
  chef: IChef;
}