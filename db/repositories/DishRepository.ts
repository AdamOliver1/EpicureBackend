import { exists } from './../helpers/filters';
import { namePipe, ingredientsPipe, tagsPipe, idPipe } from './../helpers/matchHelper';
import BaseRepository from "./base/BaseRepository";
import {  Dish } from "../dbModels/DishModel";
import { injectable } from "inversify";
import IDish from "../../models/Dish";
import { IDishRepository } from '../Interfaces/ModelsRepositories';

@injectable()
export class DishRepository extends BaseRepository<IDish> implements IDishRepository {
  constructor() {
    super(Dish);
  }
  
  async findById(id: string): Promise<IDish[]> {
   const res =  await this.filterMultipleOptionsWithPopulation([idPipe(id)])
   if (res.length > 1) throw new Error("ID must be unique!");
   return res;
  }

  async getAllExists(): Promise<IDish[]> {
    return await this.model.aggregate([
      { $match:exists() },
      { $lookup: this.lookup() },
    ]);
  }
 
  async filterByName(name: string): Promise<IDish[]> {
    return this.filterMultipleOptionsWithPopulation([namePipe(name)]);
  }

  
  async filterAllStrings(text: string): Promise<IDish[]> {
    return this.filterMultipleOptionsWithPopulation([
      namePipe(text),
      ingredientsPipe(text),
      tagsPipe(text)
    ]);
  }

  private async filterMultipleOptionsWithPopulation(options: {}[]): Promise<IDish[]> {
    return this.model.aggregate([
      {
        $match: {
          $and: [
            { $or: options},
           exists(),
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
