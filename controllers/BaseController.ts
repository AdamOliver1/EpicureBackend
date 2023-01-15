import { IHandler } from "./../handlers/interfaces/IHandler";
import { injectable } from "inversify";
import express, { Request, Response, Router } from "express";
import IModel from "../models/IModel";

@injectable()
export default abstract class BaseController {
  protected abstract handler: IHandler<IModel>;
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

  getById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      if (id === undefined) throw new Error("Must deliver an id");
      const item = await this.handler.findById(id);
      res.send(item);
    } catch (err: any) {
      console.log("errorrrrrrrrrrrrr: " + err);
      throw err;
      // console.log(err);
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
