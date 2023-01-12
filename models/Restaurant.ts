import { findExists } from "./../helpers/findNotDeleted";
import { Schema, model, Types, Document } from "mongoose";
import { IChef } from "./Chef";
import IModel from "./IModel";
import { Status } from "./status";

interface IRestaurant extends IModel {
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
    ref: "Chef",
    required: true,
  },
  status: {
    type: String,
    enum: Object.values(Status),
    default: Status.EXISTS,
  },
});

const Restaurant = model<IRestaurant>("Restaurant", restaurantSchema);

export { Restaurant, IRestaurant };
