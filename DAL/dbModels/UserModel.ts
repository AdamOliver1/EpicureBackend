import { Schema, model } from "mongoose";
import { STATUS } from "../../models/status";
import IUser from "../../models/User";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
import { ROLE } from "../../models/Role";
const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: Object.values(ROLE),
      default: ROLE.UPDATER,
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

userSchema.pre("save", async function (next) {
  const user = this;
  if (user && user.isModified("password")) {
    // user.password = await bcrypt.hash(user.password, 10);
  }
  next();
});

// userSchema.methods.generateAuthToken = function (): string {
  // return jwt.sign(
  //   { _id: this._id, role: this.role },
  //   process.env.JWTPRIVATEKEY as string,
  //   { expiresIn: "2d" }
  // );
// };

const User = model<IUser>("User", userSchema);

export { User };
