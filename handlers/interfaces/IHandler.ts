import IModel from '../../models/IModel';
import { ICrudHandler } from './ICrudHandler';
export interface IHandler extends ICrudHandler{
    disable:(id: string)=> Promise<any>;
    filterByName(name:string, populate?: string): Promise<IModel[]>;
}

