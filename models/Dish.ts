import { Schema, model, Document,Types,Model } from 'mongoose';
import IModel from './IModel';
import {IRestaurant} from './Restaurant';


interface IDish extends IModel{
    price: number;
    ingredients?: string[];
    tags?: string[];
    restaurant: IRestaurant; 
  }
  

const dishSchema = new Schema<IDish>({
   
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  ingredients: {
    type: [String],
  },
  tags: {
    type: [String],
  },
  restaurant: {
    type: Types.ObjectId,
    ref: 'Restaurant',
    required: true,
  },
});

const Dish = model<IDish>('Dish', dishSchema);

export {IDish,Dish};
