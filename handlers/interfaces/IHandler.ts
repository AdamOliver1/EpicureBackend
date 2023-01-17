import IModel from "../../models/IModel";
import { ICrudHandler } from "./ICrudHandler";
export interface IHandler<T extends IModel> extends ICrudHandler<T> {
  disable: (id: string) => Promise<any>;
  filterByName(name: string, populate?: string): Promise<T[]>;
  findById(id: string): Promise<T>;
}
