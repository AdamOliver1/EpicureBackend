
import { Schema, model,Document,Types } from 'mongoose';

interface IChef extends Document  {
    name: string;
    image?: string;
    description?: string;
    restaurants?: string[];
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
  restaurants: [{
    type: Types.ObjectId,
    ref: 'Restaurant',
  }],
});

const Chef = model<IChef>('Chef', chefSchema);

export {Chef,IChef};
