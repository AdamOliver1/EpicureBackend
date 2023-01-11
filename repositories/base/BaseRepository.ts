import { ObjectId } from 'mongodb';
import { Model } from "mongoose";
import { IRepository } from "../Interfaces/IRepository";
import IModel from "../../models/IModel";

import mongoose from "mongoose";

export default abstract class BaseRepository<T extends IModel> implements IRepository<T> {
  model: Model<T>;
  constructor(model: Model<T>) {
    this.model = model;
  }

  async create(item: T): Promise<T> {
    const newItem = this.model.create({ ...item });
    return newItem;
  }

  async update(id: string, changes: T): Promise<T | null> {
    let {...props}:any = changes;
      const updatedItem = await this.model.updateOne({ _id: id }, { $set: {...props} });
      return this.model.findById(id);
  }

  async delete(id: string): Promise<any> {
    return await this.model.findByIdAndDelete({ _id: id });
   
  }

  async getAll( populate?: string): Promise<T[]> {
   return await this.model.find({});
  }

  protected find( query:{} = {},populate?: string) {
    return this.model.find(query).populate(populate || []);
  }

  async findOne(id: string): Promise<T | null> {
    const item = await this.model.findById({ _id: id });
    return item;
  }
}

// export default abstract class BaseRepository<T extends IModel> implements IRepository<T> {
//   model: Model<T>;
//   constructor(model: Model<T>) {
//     this.model = model;
//   }

//   async create(item: T): Promise<T> {
//     const newItem = this.model.create({ ...item });
//     return newItem;
//   }

//   async update(id: string, changes: T): Promise<T | null> {
//     let {...props}:any = changes;
//       const updatedItem = await this.model.updateOne({ _id: id }, { $set: {...props} });
//       return this.model.findById(id);
//   }

//   async delete(id: string): Promise<any> {
//     return await this.model.findByIdAndDelete({ _id: id });
   
//   }

//   async getAll( populate?: string): Promise<T[]> {
//    return await this.model.find({});
//   }

//   protected find( query:{} = {},populate?: string) {
//     return this.model.find(query).populate(populate || []);
//   }

//   async findOne(id: string): Promise<T | null> {
//     const item = await this.model.findById({ _id: id });
//     return item;
//   }
// }
