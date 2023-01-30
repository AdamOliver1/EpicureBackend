import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "inversify";
import TYPES from "../factory/types";
import { IRestaurantHandler } from "../handlers/interfaces/modelsInterfaces";
import BaseController from "./BaseController";

@injectable()
export class RestaurantController extends BaseController {
  constructor(
    @inject(TYPES.IRestaurantHandler)
    protected readonly handler: IRestaurantHandler
  ) {
    super();
  }

  getByChef = async (req: Request, res: Response, next: NextFunction) => {
    const items = await this.handler.getByChef(req.params.id);
    res.send(items);
  };

  getLimited = async (req: Request, res: Response, next: NextFunction) => {
    const items = await this.handler.getLimited(3);
    res.send(items);
  };
}
