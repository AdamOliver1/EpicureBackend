import { Schema, model, Types, Document } from "mongoose";
import IModel from "./IModel";
import IRestaurant from "../../models/Restaurant";
import { Status } from "../../models/status";


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

export { Restaurant };
