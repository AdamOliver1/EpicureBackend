import { AppError } from "./../Error/appError";
import { IRepository } from "../DAL/Interfaces/IRepository";
import { IHandler } from "./interfaces/IHandler";
import { injectable } from "inversify";
import IModel from "../models/IModel";
import { HttpCode } from "../Error/httpCode";

@injectable()
export abstract class BaseHandler<T extends IModel> implements IHandler<T> {
  async findById(id: string): Promise<T> {
    const res = await this.restaurantRepository.findById(id);
    if (!res)
      throw new AppError({
        description: "There is no much",
        httpCode: HttpCode.NOT_FOUND_404,
      });
    return res;
  }

  protected abstract restaurantRepository: IRepository<T>;
  abstract deletePermanently(id: string): Promise<any>;

  async disable(id: string): Promise<any> {
    return await this.restaurantRepository.Disable(id);
  }

  async getAll(populate?: string): Promise<T[]> {
    return await this.restaurantRepository.getAllExists(populate);
  }

  async update(id: string, item: T): Promise<T | null> {
    return await this.restaurantRepository.update(id, item);
  }

  async create(restaurant: T): Promise<T> {
    return await this.restaurantRepository.create(restaurant);
  }

  async filterByName(name: string, populate?: string): Promise<T[]> {
    return await this.restaurantRepository.filterByName(name, populate);
  }
}
