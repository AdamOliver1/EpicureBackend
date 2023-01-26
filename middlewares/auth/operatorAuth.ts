import { ROLE } from "../../models/Role";
import jwt, { Secret, JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { CustomRequest } from "./observerAuth";

export const authCRUD = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if ((req as CustomRequest).token.role !== ROLE.CRUD) {
    return res.status(403).send("Access denied."); //TODO check expired
  }
  next();
};
