import { IHandler } from "./interfaces/IHandler";
import IModel from "../models/IModel";
import { injectable } from "inversify";

@injectable()
export abstract class BaseHandler implements IHandler {
  protected abstract repository: any;

  constructor() {}

  abstract deletePermanently(id: string): Promise<any>;

  async disable(id: string): Promise<any> {
    return await this.repository.Disable(id);
  }

  async getAll(populate?: string): Promise<IModel[]> {
    return await this.repository.getAll(populate);
  }

  // can be overidded
  async update(id: string, item: IModel): Promise<IModel | null> {
    return await this.repository.update(id, item);
  }

  async create(restaurant: IModel): Promise<IModel> {
    return await this.repository.create(restaurant);
  }

  async filterByName(name: string, populate?: string): Promise<IModel[]> {
    return await this.repository.filterByName(name, populate);
  }
}
