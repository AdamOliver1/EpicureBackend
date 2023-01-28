import mongoose from "mongoose";


export const fieldPipe = (field: string, name: string): any => ({
  [field]: { $regex: name , $options: "i" }, //TODO
});

export const arrayFieldPipe = (field: string, name: string): any => ({
  [field]: { $regex: name , $options: "i" }, //TODO
});

export const idPipe = (id: string): any => ({
  _id: new mongoose.Types.ObjectId(id),
});
