import { Schema, model } from "mongoose";
import { Status } from "../../models/status";
import IUser from "../../models/User";


const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
    unique:true
  },
  password: {
    type: String,
    required: true,
    unique:true
  },
  status: {
    type: String,
    enum: Object.values(Status),
    default: Status.EXISTS,
    select:false
  },
},{ versionKey: false });
const User = model<IUser>("User", userSchema);

export { User };
