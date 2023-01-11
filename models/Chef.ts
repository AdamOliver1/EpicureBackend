import { Schema, model, Document, Types } from "mongoose";
import IModel from "./IModel";


interface IChef extends IModel {
  image: string;
  description: string;
}

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
});

const Chef = model<IChef>("Chef", chefSchema);

export { Chef, IChef };
