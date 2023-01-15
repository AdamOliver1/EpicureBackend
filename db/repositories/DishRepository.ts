import { namePipe, ingredientsPipe, tagsPipe } from './../helpers/matchHelper';
import BaseRepository from "./base/BaseRepository";
import {  Dish } from "../dbModels/DishModel";
import { injectable } from "inversify";
import IDish from "../../models/Dish";
import { Status } from "../../models/status";
import { IDishRepository } from '../Interfaces/ModelsRepositories';

@injectable()
export class DishRepository extends BaseRepository<IDish> implements IDishRepository {
  constructor() {
    super(Dish);
  }


  async getAllExists(): Promise<IDish[]> {
    return await this.model.aggregate([
      { $match: { status: Status.EXISTS } },
      { $lookup: this.lookup() },
    ]);
  }
 
  async filterByName(name: string): Promise<IDish[]> {
    return this.filterAndPopulate([namePipe(name)]);
  }

  
  async filterAllStrings(text: string): Promise<IDish[]> {
    return this.filterAndPopulate([
      namePipe(text),
      ingredientsPipe(text),
      tagsPipe(text)
    ]);
  }

  private async filterAndPopulate(options: {}[]): Promise<IDish[]> {
    return this.model.aggregate([
      {
        $match: {
          $and: [
            {  $or: options,},
            { status: Status.EXISTS },
          ],
        },
      },
      { $lookup: this.lookup() },
    ]);
  }
 
  private lookup() :any{
  return ({ from: "restaurants",
    localField: "restaurant",
    foreignField: "_id",
    as: "restaurant",})
  };
}
