import { Schema, model } from "mongoose";
import { STATUS } from "../../models/status";
import IChef from "../../models/Chef";
import { IsChefOfTheWeek } from "../../models/ChefOfTheWeek";

const chefSchema = new Schema<IChef>(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      enum: Object.values(STATUS),
      default: STATUS.EXISTS,
      select: false,
    },
    isChefOfTheWeek: {
      type: String,
      enum: Object.values(IsChefOfTheWeek),
      default: IsChefOfTheWeek.NotYet,
      select: false,
    },
  },
  { versionKey: false }
);
const Chef = model<IChef>("Chef", chefSchema);

export { Chef };
