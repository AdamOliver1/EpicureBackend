import { injectable, unmanaged } from "inversify";
import { Model, PipelineStage } from "mongoose";
import { IRepository } from "../../Interfaces/IRepository";
import { Status } from "../../../models/status";
import IModel from "../../dbModels/IModel";

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

  async getAllExists(): Promise<T[]> {
    return await this.model.aggregate([{ $match:{ status: Status.EXISTS}}]);
  }

  abstract filterByName(name: string, populate?: string): Promise<T[]>;

  protected async filterByText(matchOptions: PipelineStage[]): Promise<T[]> {
    return this.model.aggregate([
      {
        $match: {
          $and: [
            {
              $or: matchOptions,
            },
            { status: Status.EXISTS },
          ],
        },
      },
    ]);
  }

}
