import { IHandler } from "./../handlers/interfaces/IHandler";
import { injectable } from "inversify";
import { Request, Response } from "express";
import IModel from "../models/IModel";

@injectable()
export default abstract class BaseController {
  protected abstract handler: IHandler<IModel>;

  constructor() {}

  create = async (req: Request, res: Response) => {
    res.send(await this.handler.create(req.body));
  };

  update = async (req: Request, res: Response) => {
    const item = await this.handler.update(req.params.id, req.body);
    res.send(item);
  };

  getAll = async (req: Request, res: Response) => {
    const items = await this.handler.getAll();
    res.send(items);
  };

  getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const item = await this.handler.findById(id);
    res.send(item);
  };

  Disable = async (req: Request, res: Response) => {
    await this.handler.disable(req.params.id);
    res.send();
  };

  deletePermanently = async (req: Request, res: Response) => {
    await this.handler.deletePermanently(req.params.id);
    res.send();
  };
}
