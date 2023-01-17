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
    return await this.model.aggregate([{ $match: exists() }]);
  }

  constructor() {
    super(Chef);
  }

  async findById(id: string): Promise<IChef> {
    console.log("id:     ::");
    console.log(id);
    
    const res = await this.model.findById(id);
    if(res === null) throw new Error("must not be null");
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
