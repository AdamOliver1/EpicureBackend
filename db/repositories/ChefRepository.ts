import {
  fieldPipe,
  idPipe,
} from "./../helpers/matchHelper";
import { Chef } from "../dbModels/ChefModel";
import BaseRepository from "./base/BaseRepository";
import { injectable } from "inversify";
import IChef from "../../models/Chef";
import { IChefRepository } from "../Interfaces/ModelsRepositories";
import { exists } from "../helpers/filters";

@injectable()
export class ChefRepository
  extends BaseRepository<IChef>
  implements IChefRepository
{

 async getAllExists(): Promise<IChef[]> {
  console.log("shitttttttt");
    return await this.model.aggregate([{ $match: exists() }]);
  }

  constructor() {
    super(Chef);
  }

  async findById(id: string): Promise<IChef[]> {
    const res = await this.filterMultipleOptions([idPipe(id)]);
    if (res.length > 1) throw new Error("ID must be unique!");
    return res;
  }

  async filterByName(name: string): Promise<IChef[]> {
    return this.filterMultipleOptions([fieldPipe("name",name)]);
  }

  async filterAllStrings(text: string): Promise<IChef[]> {
    return this.filterMultipleOptions([
      fieldPipe("name",text),
      fieldPipe("description",text),
    ]);
  }
}
