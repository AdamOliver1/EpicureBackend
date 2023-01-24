import { BaseHandler } from "./BaseHandler";
import { IChefRepository } from "../db/Interfaces/ModelsRepositories";
import { IChefHandler } from "./interfaces/modelsInterfaces";
import { inject, injectable } from "inversify";
import TYPES from "../factory/types";
import IChef from "../models/Chef";

@injectable()
export class ChefHandler extends BaseHandler<IChef> implements IChefHandler {
  constructor(
    @inject(TYPES.IChefRepository)
    protected readonly repository: IChefRepository
  ) {
    super();
  }
  updateChefOfTheWeek(id: string): Promise<IChef | null> {
  return this.repository.updateChefOfTheWeek(id);
  }

  async deletePermanently(id: string): Promise<any> {
    return await this.repository.deletePermanently(id);
  }



  async getChefOfTheWeek(): Promise<IChef | null> {
    return await this.repository.getChefOfTheWeek();
  }

  async filterAllStrings(name: string): Promise<IChef[]> {
    return await this.repository.filterAllStrings(name);
  }
}
