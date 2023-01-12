import { IDishRepository } from "../repositories/Interfaces/ModelsRepositories";
import IModel from "../models/IModel";
import { IDish } from "../models/Dish";
import { IDishHandler } from "./interfaces/modelsInterfaces";
import { BaseHandler } from "./BaseHandler";
import { inject, injectable } from "inversify";
import { TYPES } from "../factory/inversify.config";

@injectable()
export class DishHandler extends BaseHandler implements IDishHandler {

  // @inject(TYPES.IDishRepository) protected repository: IDishRepository;
  protected repository: IDishRepository;

  constructor( // @inject(TYPES.IDishRepository)
  protected readonly dishRepository: IDishRepository)
  {
    super();
    this.repository = dishRepository;
  }

  async deletePermanently(id: string): Promise<any> {
    return await this.repository.deletePermanently(id);
  }
}
