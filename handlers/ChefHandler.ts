import { BaseHandler } from "./BaseHandler";
import { IChefRepository } from "../repositories/Interfaces/ModelsRepositories";
import IModel from "../models/IModel";
import { IChef } from "../models/Chef";
import { IChefHandler } from "./interfaces/modelsInterfaces";

export class ChefHandler extends BaseHandler implements IChefHandler {
  constructor(repository: IChefRepository) {
    super(repository);
  }
}
