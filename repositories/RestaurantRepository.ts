import {Chef, IChef } from '../models/Chef';
import {BaseRepository} from './base/BaseRepository';
import { IRestaurant,Restaurant } from '../models/Restaurant';

export class RestaurantRepository extends  BaseRepository<IRestaurant>{

    constructor() {
        super(Restaurant);
       
    }
}


