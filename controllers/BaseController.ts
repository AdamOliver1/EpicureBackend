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
    console.log(req.params);
    console.log(req.body);
    
    const item = await this.handler.update(req.params.id, req.body);
    res.send(item);
  };

  getAll = async (req: Request, res: Response) => {
    const items = await this.handler.getAll();
    res.send(items);
  };

  delete = async (req: Request, res: Response) => {
    await this.handler.delete(req.params.id);
    res.send();
  };
}
