import BaseRepository from "./base/BaseRepository";
import { IDish, Dish } from "../models/Dish";

export class DishRepository extends BaseRepository<IDish> {
  constructor() {
    super(Dish);
  }
}
