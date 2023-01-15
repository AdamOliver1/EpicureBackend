import { Schema, model } from "mongoose";
import { Status } from "../../models/status";
import IChef from "../../models/Chef";


const chefSchema = new Schema<IChef>({
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
    enum: Object.values(Status),
    default: Status.EXISTS,
    select:false
  },

},{ versionKey: false });
const Chef = model<IChef>("Chef", chefSchema);

export { Chef };
