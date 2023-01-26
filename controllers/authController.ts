import {
  IAuthHandler,
  IUserHandler,
} from "../handlers/interfaces/modelsInterfaces";
import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "inversify";
import TYPES from "../factory/types";
import { HttpCode } from "../Error/httpCode";
import { AppError } from "../Error/appError";

@injectable()
export class AuthController {
  constructor(
    @inject(TYPES.IAuthHandler) protected readonly authHandler: IAuthHandler,
    @inject(TYPES.IUserHandler) protected readonly userHandler: IUserHandler
  ) {}

  Login = async (req: Request, res: Response, next: NextFunction) => {
      const { user, token } = await this.authHandler.VerifyLogin(
        req.body.username,
        req.body.password
      );
     
      res.send({ user, token });
  };
}
