import { injectable, unmanaged } from 'inversify';
import { Model } from "mongoose";
import { IRepository } from "../Interfaces/IRepository";
import IModel from "../../models/IModel";
import { Status } from "../../models/status";
import { findExists } from "../../helpers/findNotDeleted";

@injectable()
export default abstract class BaseRepository<T extends IModel>
  implements IRepository<T>
{
  model: Model<T>;

  constructor(@unmanaged() model: Model<T>) {
    this.model = model;
  }


  async create(item: T): Promise<T> {
    const newItem = this.model.create({ ...item });
    return newItem;
  }


  async update(id: string, changes: T): Promise<T | null> {
    let { ...props }: any = changes;
    await this.model.updateOne({ _id: id }, { $set: { ...props } });
    return this.model.findById(id);
  }


  async Disable(id: string): Promise<any> {
    return await this.model.updateOne(
      { _id: id },
      { $set: { status: Status.DISABLED } }
    );
  }

  
  async deletePermanently(id: string): Promise<any> {
    return await this.model.findByIdAndDelete({ _id: id });
  }

  async getAll(populate?: string): Promise<T[]> {
    return await this.find({}, populate);
  }

//TODO find a way to write it without ? populate
  protected async find(query: {} = {}, populate?: string)  :Promise<T[]>{
    return populate
      ? await findExists(this.model)
          .find(query)
          .populate(populate, {
            match: { status: Status.EXISTS },
          })
      : findExists(this.model).find(query);
  }


   async filterByName(name:string, populate?: string): Promise<T[]> {
    
    const res = populate
    //   ? await findExists(this.model)
      ? await findExists(this.model)
          .find({ name: { $regex: name, $options: 'i' }  })
          .populate(populate, {
            match: { status: Status.EXISTS },
          })
      : findExists(this.model).find({ name: { $regex: name, $options: 'i' } });
    console.log(res);
    console.log("res");
    return res;
    
  }


  async findOne(id: string, populate?: string): Promise<T | null> {
    return populate
      ? await findExists(this.model)
          .findById({ _id: id })
          .populate(populate, {
            match: { status: Status.EXISTS },
          })
      : findExists(this.model).findById({ _id: id });
  }
}
