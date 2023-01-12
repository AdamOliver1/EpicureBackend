import { DishHandler } from './../../handlers/DishHandler';
import { RestaurantRepository } from './../../repositories/RestaurantRepository';
import { RestaurantHandler } from './../../handlers/RestaurantHandler';
import { ChefHandler } from './../../handlers/ChefHandler';
import { FilterController } from '../../controllers/FilterController';
import { ChefRepository } from "../../repositories/ChefRepository";
import { ChefController } from "../../controllers/ChefController";
import { DishRepository } from "../../repositories/DishRepository";
import { DishController } from "../../controllers/DishController";
import express from "express";
// import { Service, Inject, Container } from "typedi";

const FilterRouter = express.Router();

// const controller = Container.get(FilterController);
const controller = new FilterController(
    new ChefHandler(new ChefRepository()),
    new RestaurantHandler(new RestaurantRepository()),
     new DishHandler(new DishRepository()))
// )

// const controller = new FilterController()
FilterRouter.get("/name", controller.filterAllByName);


export default FilterRouter ;
