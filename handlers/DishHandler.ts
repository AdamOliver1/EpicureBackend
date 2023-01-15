import { IDishRepository } from "../db/Interfaces/ModelsRepositories";
import { IDishHandler } from "./interfaces/modelsInterfaces";
import { BaseHandler } from "./BaseHandler";
import { inject, injectable } from "inversify";
import TYPES from "../factory/types";
import IDish from "../models/Dish";

@injectable()
export class DishHandler extends BaseHandler<IDish> implements IDishHandler {
  // @inject(TYPES.IDishRepository) protected repository: IDishRepository;
  protected repository: IDishRepository;

  constructor(
    // @inject(TYPES.IDishRepository)
    @inject(TYPES.IDishRepository)
    protected readonly dishRepository: IDishRepository
  ) {
    super();
    this.repository = dishRepository;
  }
  async filterAllStrings(name: string): Promise<IDish[]> {
    return await this.repository.filterAllStrings(name);
  }

  async deletePermanently(id: string): Promise<any> {
    return await this.repository.deletePermanently(id);
  }
}
