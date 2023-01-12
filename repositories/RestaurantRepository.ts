import { Chef, IChef } from "../models/Chef";
import BaseRepository from "./base/BaseRepository";
import { IRestaurant, Restaurant } from "../models/Restaurant";
import { injectable } from "inversify";

@injectable()
export class RestaurantRepository extends BaseRepository<IRestaurant> {
  constructor() {
    super(Restaurant);
  }
}
