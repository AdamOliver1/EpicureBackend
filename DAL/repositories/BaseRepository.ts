import { injectable, unmanaged } from "inversify";
import { Model, PipelineStage } from "mongoose";
import { IRepository } from "../Interfaces/IRepository";
import { Status } from "../../models/status";
import IModel from "../../models/IModel";
import { disabled, exists } from "../helpers/filters";

@injectable()
export default abstract class BaseRepository<T extends IModel>
  implements IRepository<T>
{
  model: Model<T>;

  constructor(@unmanaged() model: Model<T>) {
    this.model = model;
  }

  abstract filterByName(name: string, populate?: string): Promise<T[]>;
  abstract findById(id: string): Promise<T | null>;
  abstract getAllExists(): Promise<T[]>;

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
    return await this.model.updateOne({ _id: id }, { $set: disabled() });
  }

  async deletePermanently(id: string): Promise<any> {
    return await this.model.findByIdAndDelete({ _id: id });
  }

  protected async filterMultipleOptions(
    matchOptions: PipelineStage[]
  ): Promise<T[]> {
    return this.model.aggregate([
      {
        $match: {
          $and: [{ $or: matchOptions }, exists()],
        },
      },
    ]);
  }
}
