import IModel from "../db/dbModels/IModel";

export default interface IChef extends IModel {
    image: string;
    description: string;
  }