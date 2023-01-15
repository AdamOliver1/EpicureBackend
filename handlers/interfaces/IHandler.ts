import IModel from '../../db/dbModels/IModel';
import { ICrudHandler } from './ICrudHandler';
export interface IHandler<T extends IModel> extends ICrudHandler<T>{
    disable:(id: string)=> Promise<any>;
    filterByName(name:string, populate?: string): Promise<T[]>;
}

