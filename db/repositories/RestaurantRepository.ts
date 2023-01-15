import BaseRepository from "./base/BaseRepository";
import { injectable } from "inversify";
import { Status } from "../../models/status";
import IRestaurant from "../../models/Restaurant";
import { Restaurant } from "../dbModels/RestaurantModel";
import { namePipe } from "../helpers/matchHelper";
import { IRestaurantRepository } from "../Interfaces/ModelsRepositories";

@injectable()
export class RestaurantRepository extends BaseRepository<IRestaurant> implements IRestaurantRepository {
  constructor() {
    super(Restaurant);
  }

  
  async getAllExists(): Promise<IRestaurant[]> {
    return await this.model.aggregate([
      { $match: { status: Status.EXISTS } },
      { $lookup: this.lookup() },
    ]);
  }

  async filterByName(name: string): Promise<IRestaurant[]> {
    return this.filterAndPopulate([namePipe(name)]);
  }

  private async filterAndPopulate(options: {}[]): Promise<IRestaurant[]> {
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
    return ({ from: "chefs",
      localField: "chef",
      foreignField: "_id",
      as: "chef",})
    };
}
