import IModel from "../../models/IModel";


export interface ICrudHandler {
  create(restaurant: IModel): Promise<IModel>;
  update(id: string, item: IModel): Promise<IModel | null>;
  delete(id: string): void;
  getAll(): Promise<IModel[]>;
}
