import IModel from "../../db/dbModels/IModel";

export interface ICrossFilteringHandle{
    filterThroughAll(text: string): Promise<{}>
}