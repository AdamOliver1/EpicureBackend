import { Status } from "./status";
import { Schema, model, Document, Types, Model } from "mongoose";
import IModel from "./IModel";
import { IRestaurant } from "./Restaurant";
import { findExists } from "../helpers/findNotDeleted";

interface IDish extends IModel {
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
    ref: "Restaurant",
    required: true,
  },
  status: {
    type: String,
    enum: Object.values(Status),
    default: Status.EXISTS,
  },
});



const Dish = model<IDish>("Dish", dishSchema);

export { IDish, Dish };
