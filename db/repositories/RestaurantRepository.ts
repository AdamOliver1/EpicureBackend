import { exists } from "./../helpers/filters";
import BaseRepository from "./base/BaseRepository";
import { injectable } from "inversify";
import { Status } from "../../models/status";
import IRestaurant from "../../models/Restaurant";
import { Restaurant } from "../dbModels/RestaurantModel";
import { fieldPipe, idPipe } from "../helpers/matchHelper";
import { IRestaurantRepository } from "../Interfaces/ModelsRepositories";

@injectable()
export class RestaurantRepository
  extends BaseRepository<IRestaurant>
  implements IRestaurantRepository
{
  constructor() {
    super(Restaurant);
  }

  async findById(id: string): Promise<IRestaurant[]> {
    const res = await this.filterWithPopulate([idPipe(id)]);
    if (res.length > 1) throw new Error("ID must be unique!");
    return res;
  }

  async getAllExists(): Promise<IRestaurant[]> {
    return await this.model.aggregate([
      { $match: exists() },
      { $lookup: this.chefLookup() },
      { $project: this.getRestaurantProps()}
    ]);
  }

  async filterByName(name: string): Promise<IRestaurant[]> {
    return this.filterWithPopulate([fieldPipe("name",name)]);
  }

  private async filterWithPopulate(options: {}[]): Promise<IRestaurant[]> {
    return this.model.aggregate([
      {
        $match: {
          $and: [{ $or: options }, exists()],
        },
      },
      { $lookup: this.chefLookup() },
    ]);
  }

  private getRestaurantProps() {
    return {
      _id: 1,
      name: 1,
      status: 1,
      image: 1,
      stars:1,
      chef: {
          $cond: {
              if: { $isArray: "$chef" },
              then: { $arrayElemAt: [ "$chef", 0 ] },
              else: "$chef"
          }
      }}
  }

  private chefLookup(): any {
    return {
      from: "chefs",
      localField: "chef",
      foreignField: "_id",
      as: "chef",
    };
  }
}
