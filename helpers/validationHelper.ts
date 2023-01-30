import { Tags } from './../models/Tags';
import Joi from "joi";

const stringRequired = Joi.string().required();
const numberRequired = Joi.number().required();

 const loginSchema = Joi.object({
    username: stringRequired.alphanum().min(3).max(30),
    password: stringRequired.min(5).max(30).lowercase().uppercase()
});

 const dishSchema = Joi.object({
    _id:Joi.allow(),
    price: numberRequired,
    ingredients: Joi.array().items(Joi.string().min(2)).required(),
    image: stringRequired,
    name: stringRequired,
    tags:Joi.array(),
    restaurant:Joi.allow(),
    
});

 const chefSchema = Joi.object({
    _id:Joi.allow(),
    name: stringRequired.label("name"),
    image: stringRequired,
    description: stringRequired,  
});

 const restaurantSchema = Joi.object({
    _id:Joi.allow(),
    name: stringRequired,
    image: stringRequired,
    stars: numberRequired.min(1).max(5),
    chef:Joi.allow()
});

export{
    loginSchema,
    dishSchema,
    chefSchema,
    restaurantSchema
}
