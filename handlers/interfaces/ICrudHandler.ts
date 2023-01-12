import IModel from "../../models/IModel";

export interface ICrudHandler {
  create(restaurant: IModel): Promise<IModel>;
  update(id: string, item: IModel): Promise<IModel | null>;
  deletePermanently(id: string): Promise<any>;
  getAll(populate?: string): Promise<IModel[]>;
}
