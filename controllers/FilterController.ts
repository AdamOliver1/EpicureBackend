import { AppError } from './../Error/appError';
import  { NextFunction, Request, Response } from "express";
import { inject, injectable } from "inversify";
import TYPES from "../factory/types";
import { ICrossFilteringHandle } from "../handlers/interfaces/ICrossFilteringHandle";
import { HttpCode } from '../Error/httpCode';

@injectable()
export class FilterController {
  constructor(
    @inject(TYPES.ICrossFilteringHandle)
    readonly crossFilteringHandle: ICrossFilteringHandle
  ) {}

  filterThroughAll = async (req: Request, res: Response,next:NextFunction) => {
   
      if (typeof req.query.name === "string") {
        const { name } = req.query;
        const arr = await this.crossFilteringHandle.filterThroughAll(name);
        res.send(arr);
      } else {
        throw new AppError({
          description:"Must provide a text to filter with",
          httpCode:HttpCode.BAD_REQUEST_400
        })
     
      }
  
  };
}
