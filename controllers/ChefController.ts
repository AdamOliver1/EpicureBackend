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

  getChefOfTheWeek = async (req: Request, res: Response) => {
    try {
      // const { id } = req.params;
// const id = "63c56dd1641a69d6f95158ec";
      // if (id === undefined) throw new Error("Must deliver an id");
      console.log(" ChefController ChefController ChefController ChefController ChefController");
      
      const item = await this.handler.getChefOfTheWeek();
      res.send(item);
    } catch (err: any) {
      console.log(err);
     
    }
  };
}
