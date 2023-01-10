// import { IHandler } from './interfaces/IHandler';
// import { RestaurantRepository } from './../repositories/RestaurantRepository';
// import { IRestaurant } from "../models/Restaurant";
// import { IRepository } from "../repositories/Interfaces/IRepository";
// import IModel from '../models/IModel';



// export abstract class BaseHandler<T> implements IHandler{
 
//     repo: IRepository<T>;

//     constructor(repository:IRepository<T>) {
//       this.repo = repository;
//     }
//    async create(item: IModel):Promise<T>{
//         return await this.repo.create(item);
//     }

//     // create(restaurant: IRestaurant) :IModel{
//     //     console.log("handleeeeeee");
        
//     //   return this.repo.create(restaurant);
//     // }

// }