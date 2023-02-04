import { Schema, model, Types, Document } from "mongoose";
import IModel from "../../models/IModel";
import IRestaurant from "../../models/Restaurant";
import { STATUS } from "../../models/status";

const restaurantSchema = new Schema<IRestaurant>(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    stars: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    chef: {
      type: Types.ObjectId,
      ref: "Chef",
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(STATUS),
      default: STATUS.EXISTS,
      select: false,
    },
  },
  { versionKey: false }
);

const Restaurant = model<IRestaurant>("Restaurant", restaurantSchema);

export { Restaurant };
