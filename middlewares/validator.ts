import { error } from './error';
import { AppError } from './../Error/appError';
import { NextFunction, Request, Response } from "express";
import joi,{ObjectSchema} from "joi";
import { HttpCode } from '../Error/httpCode';


export const validator = (schema: ObjectSchema) => {
  return async  (req: Request,res: Response, next: NextFunction) => {
    
    const result = schema.validate(req.body,{ abortEarly: false });
    const msgs = result.error?.details.map(err => {
      return {
        message:err.message.replace('/',"").replace('"',"")
      }
    });
    console.log(msgs);
    
    if(result.error){
      throw new AppError({
        description:"Validation Error",
        httpCode:HttpCode.BAD_REQUEST_400,
        errors:msgs
      })
    }
    next()
  }
} 
  