import { Tags } from './../models/Tags';
import Joi from "joi";

const stringRequired = Joi.string().required();
const numberRequired = Joi.number().required();

 const loginSchema = Joi.object({
    username: stringRequired.alphanum().min(3).max(30),
    password: stringRequired.min(8).max(30).lowercase().uppercase()
});

 const dishSchema = Joi.object({
    price: numberRequired,
    ingredients: Joi.array().items(Joi.string().min(2)).required(),
    image: stringRequired,
    
});


 const chefSchema = Joi.object({
    name: stringRequired.label("name"),
    image: stringRequired,
    description: stringRequired,  
});

 const restaurantSchema = Joi.object({
    name: stringRequired,
    image: stringRequired,
    stars: numberRequired.min(1).max(5),
});

export{
    loginSchema,
    dishSchema,
    chefSchema,
    restaurantSchema
}
