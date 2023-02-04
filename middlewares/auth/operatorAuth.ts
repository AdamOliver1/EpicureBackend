import { AppError } from "./../../Error/appError";
import { ROLE } from "../../models/Role";
import { Request, Response, NextFunction } from "express";
import {  IAuthenticatedRequest } from "./updaterAuth";
import { HttpCode } from "../../Error/httpCode";

export const authCRUD = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if ((req as IAuthenticatedRequest).user?.role !== ROLE.CRUD) {
    throw new AppError({
      description: "Access denied.",
      httpCode: HttpCode.FORBIDDEN_403,
    });
  }
  next();
};
