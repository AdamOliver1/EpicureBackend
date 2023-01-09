import {  Model } from 'mongoose';
import { IWrite } from '../Interfaces/IWrite';
import { IRead } from '../Interfaces/IRead';


export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {

    model:Document;
    constructor(model:Model<Document>) {
      
        
    }
    create(item: T): Promise<boolean> {
        throw new Error();
    }

    update(id: string, item: T): Promise<boolean> {
        throw new Error();
    }

    delete(id: string): Promise<boolean> {
        throw new Error();
    }

    find(item: T): Promise<T[]> {
        throw new Error();
    }

    findOne(id: string): Promise<T> {
        throw new Error();
    }
}