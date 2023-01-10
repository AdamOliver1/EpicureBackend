import { IHandler } from "./../handlers/interfaces/IHandler";
import express, { Request, Response, Router } from "express";

export abstract class BaseController {
  handler: IHandler;
  router: Router;

  constructor(handler: IHandler) {
    this.handler = handler;
    this.router = express.Router();
  }

  create = async (req: Request, res: Response) => {
    console.log(req.body);
    const item = await this.handler.create(req.body);
    res.send(item);
  };

  update = async (req: Request, res: Response) => {
   const item =  await this.handler.update(req.body.id,req.body.item);
  };
}
