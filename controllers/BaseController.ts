import { injectable } from 'inversify';
import express, { Request, Response, Router } from "express";

@injectable()
export default abstract class BaseController{
  //TODO change any to types | | |
  protected abstract handler: any;
  router: Router;

  constructor() {
    this.router = express.Router();
  }

  create = async (req: Request, res: Response) => {
    try {
      const item = await this.handler.create(req.body);
      res.send(item);
    } catch (err: any) {
      console.log(err);
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const item = await this.handler.update(req.params.id, req.body);
      res.send(item);
    } catch (err: any) {
      console.log(err);
    }
  };

  getAll = async (req: Request, res: Response) => {
    try {
      const items = await this.handler.getAll();
      res.send(items);
    } catch (err: any) {
      console.log(err);
    }
  };

  Disable = async (req: Request, res: Response) => {
    try {
      await this.handler.disable(req.params.id);
      res.send();
    } catch (err: any) {
      console.log(err);
    }
  };

  deletePermanently = async (req: Request, res: Response) => {
    try {
        await this.handler.deletePermanently(req.params.id);
        res.send();

      } catch (err: any) {
        console.log(err);
      }

  };
}
