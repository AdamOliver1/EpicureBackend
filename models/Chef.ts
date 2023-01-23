import { IsChefOfTheWeek } from "./ChefOfTheWeek";
import IModel from "./IModel";

export default interface IChef extends IModel {
  image: string;
  description: string;
  isChefOfTheWeek?:IsChefOfTheWeek;
}
