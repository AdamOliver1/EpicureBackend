import { AppError } from './../../Error/appError';
import { ROLE } from "../../models/Role";
import jwt, { Secret, JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { CustomRequest } from "./observerAuth";
import { HttpCode } from '../../Error/httpCode';

export const authCRUD = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if ((req as CustomRequest).token.role !== ROLE.CRUD) {
    throw new AppError({
      description:"Access denied.",
      httpCode:HttpCode.FORBIDDEN_403
    })
  }
  next();
};
