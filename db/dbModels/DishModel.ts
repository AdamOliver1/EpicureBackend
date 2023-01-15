import { Status } from "../../models/status";
import { Schema, model, Types } from "mongoose";
import IDish from "../../models/Dish";


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

export {  Dish };
