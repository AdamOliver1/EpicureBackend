import  { NextFunction, Request, Response } from "express";
import { inject, injectable } from "inversify";
import TYPES from "../factory/types";
import { ICrossFilteringHandle } from "../handlers/interfaces/ICrossFilteringHandle";

@injectable()
export class FilterController {
  constructor(
    @inject(TYPES.ICrossFilteringHandle)
    readonly crossFilteringHandle: ICrossFilteringHandle
  ) {}

  filterThroughAll = async (req: Request, res: Response,next:NextFunction) => {
    try {
      if (typeof req.query.name === "string") {
        const { name } = req.query;
        const arr = await this.crossFilteringHandle.filterThroughAll(name);
        res.send(arr);
      } else {
        throw new Error(
          "A name is required to filter with. Please provide a valid name and try again."
        );
      }
    } catch (err: any) {
      next(err)
    }
  };
}
