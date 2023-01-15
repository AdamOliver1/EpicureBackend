import { IRepository } from "../db/Interfaces/IRepository";
import { IHandler } from "./interfaces/IHandler";
import { injectable } from "inversify";
import IModel from "../db/dbModels/IModel";

@injectable()
export abstract class BaseHandler<T extends IModel> implements IHandler<T> {
  protected abstract repository: IRepository<T>;

  abstract deletePermanently(id: string): Promise<any>;

  async disable(id: string): Promise<any> {
    return await this.repository.Disable(id);
  }

  async getAll(populate?: string): Promise<T[]> {
    console.log("get all!!!!!");

    return await this.repository.getAllExists(populate);
  }

  // can be overidde
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

// export abstract class BaseHandler implements IHandler {
//   protected abstract repository: any;

//   constructor() {}

//   abstract deletePermanently(id: string): Promise<any>;

//   async disable(id: string): Promise<any> {
//     return await this.repository.Disable(id);
//   }

//   async getAll(populate?: string): Promise<IModel[]> {
//     console.log("get all!!!!!");

//     return await this.repository.getAll(populate);
//   }

//   // can be overidded
//   async update(id: string, item: IModel): Promise<IModel | null> {
//     return await this.repository.update(id, item);
//   }

//   async create(restaurant: IModel): Promise<IModel> {
//     return await this.repository.create(restaurant);
//   }

//   async filterByName(name: string, populate?: string): Promise<IModel[]> {
//     return await this.repository.filterByName(name, populate);
//   }
// }
