import mongoose, { Model,Schema, model, Document, Types } from "mongoose";
import IModel from "./IModel";
import { Status } from "./status";
import { findExists } from "../helpers/findNotDeleted";
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
  status: {
    type: String,
    enum: Object.values(Status),
    default: Status.EXISTS,
    
  },
});

const Chef = model<IChef>("Chef", chefSchema) ;

export { Chef, IChef };
