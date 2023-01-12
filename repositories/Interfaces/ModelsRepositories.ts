import { injectable } from "inversify";
import { IChef } from "../../models/Chef";
import { IDish } from "../../models/Dish";
import IModel from "../../models/IModel";
import { IRestaurant } from "../../models/Restaurant";
import { IRepository } from "./IRepository";



export interface IModelRepository extends IRepository<IModel> {}
export interface IChefRepository extends IRepository<IChef> {}
export interface IDishRepository extends IRepository<IDish> {}
export interface IRestaurantRepository extends IRepository<IRestaurant> {}
