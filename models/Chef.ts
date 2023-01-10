import { Schema, model, Document, Types } from "mongoose";
import IModel from "./IModel";
import { IRestaurant } from "./Restaurant";



interface IChef extends IModel {
//   _id?: string;
//   name: string;
  image: string;
  description: string;
  // restaurants: IRestaurant[];
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
  //   restaurants: [{
  //     type: Types.ObjectId,
  //     ref: 'Restaurant',
  //   }],
});

const Chef = model<IChef>("Chef", chefSchema);

export { Chef, IChef };
