import jwt, { Secret, JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { ROLE } from "../../models/Role";
import { AppError } from "../../Error/appError";
import { HttpCode } from "../../Error/httpCode";

export interface IToken extends JwtPayload {
  _id: string;
  role: ROLE;
}

export interface CustomRequest extends Request {
  token: IToken;
}

export const authUpdater = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("authorization")?.replace("Bearer ", "");

  if (!token)
    throw new AppError({
      description: "Unauthorized user",
      httpCode: HttpCode.FORBIDDEN_403,
    });

  const decoded = jwt.verify(token, process.env.JWTPRIVATEKEY as string);

  (req as CustomRequest).token = decoded as IToken;
  next();
};
