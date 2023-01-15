import IModel from "../../models/IModel";

export interface ICrossFilteringHandle {
  filterThroughAll(text: string): Promise<{}>;
}
