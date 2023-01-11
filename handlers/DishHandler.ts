import { IDishRepository } from "../repositories/Interfaces/ModelsRepositories";
import IModel from "../models/IModel";
import { IDish } from "../models/Dish";
import { IDishHandler } from "./interfaces/modelsInterfaces";
import { BaseHandler } from "./BaseHandler";



export class DishHandler extends BaseHandler implements IDishHandler{
    constructor(repository: IDishRepository) {
      super(repository);
    }
  }
