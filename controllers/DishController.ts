import express, { NextFunction, Request, Response, Router } from "express";
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

  getLimitedDishes = async (req: Request, res: Response,next:NextFunction) => {
    try {
      const items = await this.handler.getLimitedDishes(3);
      res.send(items);
    } catch (err: any) {
      next(err)
    }
  };

  
}
