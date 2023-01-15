import IModel from "../../models/IModel";

export interface ICrudHandler<T extends IModel> {
  create(restaurant: T): Promise<T>;
  update(id: string, item: T): Promise<T | null>;
  deletePermanently(id: string): Promise<any>;
  getAll(): Promise<T[]>;
}
