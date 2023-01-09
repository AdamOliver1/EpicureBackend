import { Schema, model,Types ,Document} from 'mongoose';
import {IChef} from './Chef';

interface IRestaurant extends Document {
    name: string;
    image?: string;
    chef: IChef;
    dishes?: string[];
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
  dishes: [{
    type: Types.ObjectId,
    ref: 'Dish',
  }],
});

const Restaurant = model<IRestaurant>('Restaurant', restaurantSchema);

export {Restaurant,IRestaurant};
