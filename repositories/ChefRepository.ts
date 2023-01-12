import { Chef, IChef } from "../models/Chef";
import BaseRepository from "./base/BaseRepository";
import { injectable } from "inversify";

@injectable()
export class ChefRepository extends BaseRepository<IChef> {
  constructor() {
    super( Chef);
  }
}
