import { exists } from "../helpers/filters";
import { arrayFieldPipe, fieldPipe, idPipe } from "../helpers/matchHelper";
import BaseRepository from "./BaseRepository";
import { Dish } from "../dbModels/DishModel";
import { injectable } from "inversify";
import IDish from "../../models/Dish";
import { IDishRepository } from "../Interfaces/ModelsRepositories";

@injectable()
export class DishRepository
  extends BaseRepository<IDish>
  implements IDishRepository
{
  constructor() {
    super(Dish);
  }

  async findById(id: string): Promise<IDish | null> {
    return await this.model.findById(id).populate("restaurant");
  }

  async getLimitedDishes(limit: number): Promise<IDish[]> {
    return this.model.find().limit(limit);
  }

  async getAllExists(): Promise<IDish[]> {
    return await this.model.aggregate([
      { $match: exists() },
      { $lookup: this.restaurantLookup() },
      { $project: this.getDishProps() },
    ]);
  }

  async filterByName(name: string): Promise<IDish[]> {
    return this.filterMultipleOptionsWithPopulation([fieldPipe("name", name)]);
  }

  async filterAllStrings(text: string): Promise<IDish[]> {
    return this.filterMultipleOptionsWithPopulation([
      fieldPipe("name", text),
      arrayFieldPipe("ingredients", text),
      arrayFieldPipe("tags", text),
    ]);
  }
  async getDishesByRestaurant(restaurantId: string): Promise<IDish[]> {
return await this.model.find({restaurant:restaurantId})

  }

  private async filterMultipleOptionsWithPopulation(
    options: {}[]
  ): Promise<IDish[]> {
    return this.model.aggregate([
      {
        $match: {
          $and: [{ $or: options }, exists()],
        },
      },
      { $lookup: this.restaurantLookup() },
      { $project: this.getDishProps() },
    ]);
  }

  private getDishProps() {
    return {
      _id: 1,
      name: 1,
      status: 1,
      price: 1,
      ingredients: 1,
      tags: 1,
      image: 1,
      restaurant: {
        $cond: {
          if: { $isArray: "$restaurant" },
          then: { $arrayElemAt: ["$restaurant", 0] },
          else: "$restaurant",
        },
      },
    };
  }

  private restaurantLookup() {
    return {
      from: "restaurants",
      localField: "restaurant",
      foreignField: "_id",
      as: "restaurant",
    };
  }
}
