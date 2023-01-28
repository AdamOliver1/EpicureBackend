import { Status } from "../../models/status";
import { Schema, model, Types } from "mongoose";
import IDish from "../../models/Dish";
import { Tags } from "../../models/Tags";


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
    type: [String]
  },
  image:{
    type: String
  },
  tags: {
    type: [String],enum:Object.values(Tags)
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
    select:false
  },

},{ versionKey: false });

const Dish = model<IDish>("Dish", dishSchema);

export {  Dish };
