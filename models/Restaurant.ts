import { Schema, model,Types ,Document} from 'mongoose';
import {IChef} from './Chef';
import IModel from './IModel';

interface IRestaurant extends IModel{
    image?: string;
    chef: IChef;
  }

const restaurantSchema = new Schema<IRestaurant>({
   
  name: {
    type: String,
    required: true, 
  },
  image: {
    type: String,
  },
  chef: {
    type: Types.ObjectId,
    ref: 'Chef',
    required: true,
  },
//   dishes: [{
//     type: Types.ObjectId,
//     ref: 'Dish',
//   }],
});

const Restaurant = model<IRestaurant>('Restaurant', restaurantSchema);

export {Restaurant,IRestaurant};
