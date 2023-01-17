import express, { Request, Response, Router } from "express";
import { inject } from "inversify";
import TYPES from "../factory/types";
import { IDishHandler } from "../handlers/interfaces/modelsInterfaces";
import BaseController from "./BaseController";

export class DishController extends BaseController {
  
  constructor(
    @inject(TYPES.IDishHandler) protected readonly handler: IDishHandler
  ) {
    super();
  }

  getLimitedDishes = async (req: Request, res: Response) => {
    try {
      const items = await this.handler.getLimitedDishes(3);
      console.log(items);
      console.log();
      
      res.send(items);
    } catch (err: any) {
      console.log(err);
    }
  };

  
}
