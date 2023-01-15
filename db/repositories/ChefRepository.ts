import {
  descriptionPipe as matchDescription,
  idPipe,
  namePipe as matchName,
} from "./../helpers/matchHelper";
import { Chef } from "../dbModels/ChefModel";
import BaseRepository from "./base/BaseRepository";
import { injectable } from "inversify";
import IChef from "../../models/Chef";
import { IChefRepository } from "../Interfaces/ModelsRepositories";

@injectable()
export class ChefRepository
  extends BaseRepository<IChef>
  implements IChefRepository
{
  constructor() {
    super(Chef);
  }

  async findById(id: string): Promise<IChef[]> {
    const res = await this.filterMultipleOptions([idPipe(id)]);
    if (res.length > 1) throw new Error("ID must be unique!");
    return res;
  }

  async filterByName(name: string): Promise<IChef[]> {
    return this.filterMultipleOptions([matchName(name)]);
  }

  async filterAllStrings(name: string): Promise<IChef[]> {
    return this.filterMultipleOptions([
      matchName(name),
      matchDescription(name),
    ]);
  }
}
