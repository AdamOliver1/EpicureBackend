import { IUserHandler } from "../handlers/interfaces/modelsInterfaces";
import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "inversify";
import TYPES from "../factory/types";
import { genSaltSync, hashSync } from "bcrypt-ts";
import { compareSync } from "bcrypt-ts";

@injectable()
export class AuthController {
  constructor(
    @inject(TYPES.IUserHandler) protected readonly handler: IUserHandler
  ) {}

  Login = async (req: Request, res: Response, next: NextFunction) => {
    try {

      const user = await this.handler.filterByName(req.body.username);
    
      if (
        !user ||
        user.length > 1 ||
        !this.handler.checkPassword(user[0], req.body.password)
      ) {
        return res.status(400).send("Invalid username or password");
      }
      res.send({username:user[0].name,password:user[0].password});
      //   res.send({ user: user, token: user.generateAuthToken() });
      //   res.send(item);
    } catch (err: any) {
        res.status(401).send("invalid")
    }
  };
}
