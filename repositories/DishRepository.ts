import BaseRepository from "./base/BaseRepository";
import { IDish, Dish } from "../models/Dish";
import { injectable } from "inversify";

@injectable()
export class DishRepository extends BaseRepository<IDish> {
  constructor() {
    super(Dish);
  }
}
