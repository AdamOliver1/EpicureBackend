import jwt, { Secret, JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { ROLE } from "../../models/Role";

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
  try {
    const token = req.header("authorization")?.replace("Bearer ", "");
    if (!token) throw new Error(); //TODO
    const decoded = jwt.verify(token, process.env.JWTPRIVATEKEY as string);

    (req as CustomRequest).token = decoded as IToken;
    next();
  } catch (err) {
    res.status(403).send("Forbidden");
  }
};
