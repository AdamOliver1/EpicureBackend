import {Chef, IChef } from '../models/Chef';
import {BaseRepository} from './base/BaseRepository';

export class ChefRepository extends  BaseRepository<IChef>{

    constructor() {
        super(Chef);
   
    }
}


