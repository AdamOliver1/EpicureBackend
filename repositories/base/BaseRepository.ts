import { Model } from "mongoose";
import { IRepository } from "../Interfaces/IRepository";
import { Document } from "mongoose";
export abstract class BaseRepository<T> implements IRepository<T> {
  model: Model<T>;
  constructor(model: Model<T>) {
    this.model = model;
  }

  async create(item: T): Promise<T> {
    const newItem = this.model.create({ ...item });
    return newItem;
  }

  async update(id: string, item: T): Promise<T | null>{
// throw new Error();
console.log("item:",item);

   const updatedModel = await this.model.updateOne({_id:id},{item});
    // const first = this.model.findById(id);
   console.log("updatedModel");
   console.log(updatedModel);
   
   return this.model.findById(id);
  }

  async delete(id: string): Promise<any> {
    const res = await this.model.remove({ _id: id });
    return res;
  }

  async find(item?: T, populate?: string): Promise<T[]> {
    return await this.model.find({item}).populate(populate || []);
  }

  async findOne(id: string): Promise<T | null> {
      const item = await this.model.findById({_id:id});
     return item;
    }
}
