import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "inversify";
import TYPES from "../factory/types";
import { IChefHandler } from "../handlers/interfaces/modelsInterfaces";
import BaseController from "./BaseController";

@injectable()
export class ChefController extends BaseController {
 
  constructor(
    @inject(TYPES.IChefHandler) protected readonly handler: IChefHandler 
  ) {
    super();
  }


  getChefOfTheWeek = async (req: Request, res: Response,next:NextFunction) => {
    try {
      const { id } = req.params;
      if (id === undefined) throw new Error("Must deliver an id");
      const item = await this.handler.getChefOfTheWeek(id);
      res.send(item);
    } catch (err: any) {
      console.log(err);
      next
    }
  };
}
