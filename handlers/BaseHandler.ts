import { IRepository } from "../db/Interfaces/IRepository";
import { IHandler } from "./interfaces/IHandler";
import { injectable } from "inversify";
import IModel from "../models/IModel";

@injectable()
export abstract class BaseHandler<T extends IModel> implements IHandler<T> {
  async findById(id: string): Promise<T> {
    return await this.repository.findById(id);
  }
  protected abstract repository: IRepository<T>;
  abstract deletePermanently(id: string): Promise<any>;

  async disable(id: string): Promise<any> {
    return await this.repository.Disable(id);
  }

  async getAll(populate?: string): Promise<T[]> {
    return await this.repository.getAllExists(populate);
  }

  async update(id: string, item: T): Promise<T | null> {
    return await this.repository.update(id, item);
  }

  async create(restaurant: T): Promise<T> {
    return await this.repository.create(restaurant);
  }

  async filterByName(name: string, populate?: string): Promise<T[]> {
    return await this.repository.filterByName(name, populate);
  }
}
