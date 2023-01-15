import { BaseHandler } from "./BaseHandler";
import { IChefRepository } from "../db/Interfaces/ModelsRepositories";
import { IChefHandler } from "./interfaces/modelsInterfaces";
import { inject, injectable } from "inversify";
import TYPES from "../factory/types";
import IChef from "../models/Chef";

@injectable()
export class ChefHandler extends BaseHandler<IChef> implements IChefHandler {
  repository: IChefRepository;
  // @inject(TYPES.IChefRepository) protected repository: IChefRepository;
  constructor(
    // @inject(TYPES.IChefRepository)
    @inject(TYPES.IChefRepository)
    protected readonly chefRepository: IChefRepository
  ) {
    super();
    this.repository = chefRepository;
  }
  stam() {
    console.log("stam");
  }

  async deletePermanently(id: string): Promise<any> {
    return await this.repository.deletePermanently(id);
  }

  async filterAllStrings(name: string): Promise<IChef[]> {
    return await this.repository.filterAllStrings(name);
  }
}
