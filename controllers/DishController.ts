import express, { NextFunction, Request, Response, Router } from "express";
import { inject } from "inversify";
import TYPES from "../factory/types";
import { IHandler } from "../handlers/interfaces/IHandler";
import { IDishHandler } from "../handlers/interfaces/modelsInterfaces";
import IModel from "../models/IModel";
import BaseController from "./BaseController";

export class DishController extends BaseController {

  constructor(
    @inject(TYPES.IDishHandler) protected readonly handler: IDishHandler
  ) {
    super();
  }

  getLimitedDishes = async (
    req: Request,
    res: Response
  ) => {
    const items = await this.handler.getLimitedDishes(3);
    res.send(items);
  };
}
