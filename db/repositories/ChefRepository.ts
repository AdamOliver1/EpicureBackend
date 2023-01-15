import { descriptionPipe as matchDescription, namePipe as matchName } from "./../helpers/matchHelper";
import { Chef } from "../dbModels/ChefModel";
import BaseRepository from "./base/BaseRepository";
import { injectable } from "inversify";
import IChef from "../../models/Chef";
import { IChefRepository } from "../Interfaces/ModelsRepositories";

@injectable()
export class ChefRepository extends BaseRepository<IChef> implements IChefRepository {
  constructor() {
    super(Chef);
  }

  async filterByName(name: string): Promise<IChef[]> {
    return this.filterByText([matchName(name)]);
  }

  async filterAllStrings(name: string): Promise<IChef[]> {
    return this.filterByText([matchName(name),matchDescription(name)]);
  }
}
