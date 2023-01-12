import { BaseHandler } from "./BaseHandler";
import { IChefRepository } from "../repositories/Interfaces/ModelsRepositories";
import IModel from "../models/IModel";
import { IChef } from "../models/Chef";
import { IChefHandler } from "./interfaces/modelsInterfaces";
import { inject, injectable } from "inversify";
import TYPES from "../factory/types";

@injectable()
export class ChefHandler extends BaseHandler implements IChefHandler {
  repository:IChefRepository;
  // @inject(TYPES.IChefRepository) protected repository: IChefRepository;
  constructor(// @inject(TYPES.IChefRepository)
  @inject(TYPES.IChefRepository) protected readonly chefRepository: IChefRepository)
  {
    super();
    this.repository = chefRepository;
  }

  async deletePermanently(id: string): Promise<any> {
    return await this.repository.deletePermanently(id);
  }
}
