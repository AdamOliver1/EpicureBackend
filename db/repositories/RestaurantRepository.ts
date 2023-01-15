import { exists } from './../helpers/filters';
import BaseRepository from "./base/BaseRepository";
import { injectable } from "inversify";
import { Status } from "../../models/status";
import IRestaurant from "../../models/Restaurant";
import { Restaurant } from "../dbModels/RestaurantModel";
import { idPipe, namePipe } from "../helpers/matchHelper";
import { IRestaurantRepository } from "../Interfaces/ModelsRepositories";

@injectable()
export class RestaurantRepository extends BaseRepository<IRestaurant> implements IRestaurantRepository {
  constructor() {
    super(Restaurant);
  }

  
  async findById(id: string): Promise<IRestaurant[]> {
    const res =  await this.filterWithPopulate([idPipe(id)])
    if (res.length > 1) throw new Error("ID must be unique!");
    return res;
   }
  async getAllExists(): Promise<IRestaurant[]> {
    return await this.model.aggregate([
      { $match: exists() },
      { $lookup: this.lookup() },
    ]);
  }

  async filterByName(name: string): Promise<IRestaurant[]> {
    return this.filterWithPopulate([namePipe(name)]);
  }

  private async filterWithPopulate(options: {}[]): Promise<IRestaurant[]> {
    return this.model.aggregate([
      {
        $match: {
          $and: [
            {  $or: options,},
           exists(),
          ],
        },
      },
      { $lookup: this.lookup() },
    ]);
  }

  private lookup() :any{
    return ({ from: "chefs",
      localField: "chef",
      foreignField: "_id",
      as: "chef",})
    };
}
