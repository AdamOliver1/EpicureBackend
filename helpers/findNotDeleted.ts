import { Model, Document, Schema } from "mongoose";
import IModel from "../models/IModel";
import { Status } from "../models/status";

export const findExists = (Model: Model<any>) => {
  return Model.find({ status:Status.EXISTS });
};
