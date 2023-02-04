import {
  IAuthHandler,
  IUserHandler,
} from "../handlers/interfaces/modelsInterfaces";
import { Handler, Request, Response } from "express";
import { inject, injectable } from "inversify";
import TYPES from "../factory/types";
import { ICognitoUserPoolHelper } from "../handlers/interfaces/ICognitoUserPoolHelper";
import { IAuthenticatedRequest } from "../middlewares/auth/updaterAuth";

//TODO add interfaces to controllers
interface IUserController {
  signUp: Handler;
  signIn: Handler;
  confirmSignUp: Handler;
  getProfile: Handler;
}


@injectable()
export class AuthController implements IUserController {
  constructor(
    @inject(TYPES.IAuthHandler) protected readonly authHandler: IAuthHandler,
    @inject(TYPES.IUserHandler) protected readonly userHandler: IUserHandler,
    @inject(TYPES.ICognitoUserPoolHelper)
    protected readonly cognitoUserPoolHelper: ICognitoUserPoolHelper
  ) {}

  

  signIn = async (req: Request, res: Response) => {
    const result = await this.cognitoUserPoolHelper.signIn(req.body);
    res.json(result);
  };

  signUp = async (req: Request, res: Response) => {
    const result = await this.cognitoUserPoolHelper.signUp(req.body);
    res.json({ message: `${result} is created.` });
  };

  confirmSignUp = async (req: Request, res: Response) => {
    const result = await this.cognitoUserPoolHelper.confirmSignUp(req.body);
    res.json({ message: result });
  };

  getProfile = async (req: Request, res: Response) => {
    res.json((req as IAuthenticatedRequest).user);
  };

  // Login = async (req: Request, res: Response) => {
  //   const { user, token } = await this.authHandler.VerifyLogin(
  //     req.body.username,
  //     req.body.password
  //   );
  //   res.send({ user, token });
  // };
}
