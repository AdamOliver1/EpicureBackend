import { IModelRepository } from "../repositories/Interfaces/ModelsRepositories";
import { IHandler } from "./interfaces/IHandler";
import { IChefRepository } from "../repositories/Interfaces/ModelsRepositories";
import IModel from "../models/IModel";
import { IChef } from "../models/Chef";
import { IChefHandler } from "./interfaces/modelsInterfaces";

export class BaseHandler implements IHandler {
  repo: IModelRepository;

  constructor(repository: IModelRepository) {
    this.repo = repository;
  }

  delete(id: string): void {
    this.repo.delete(id);
  }

  async getAll(): Promise<IModel[]> {
    return await this.repo.getAll();
  }

  // can be overidded
  async update(id: string, item: IModel): Promise<IModel | null> {
    return await this.repo.update(id, item);
  }

  async create(restaurant: IModel): Promise<IModel> {
    return await this.repo.create(restaurant);
  }
}
