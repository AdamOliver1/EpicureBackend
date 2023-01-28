import { ROLE } from "../models/Role";
import { inject, injectable } from "inversify";
import { IUserRepository } from "../DAL/Interfaces/ModelsRepositories";
import TYPES from "../factory/types";
import IUser from "../models/User";
import { IAuthHandler, IUserHandler } from "./interfaces/modelsInterfaces";
import bcrypt from "bcrypt";
import { HttpCode } from "../Error/httpCode";
import { AppError } from "../Error/appError";

export type VerifiedToken = {
  user: IUser;
  token: string;
};

@injectable()
export class AuthHandler implements IAuthHandler {
  constructor(
    @inject(TYPES.IUserRepository)
    protected readonly repository: IUserRepository
  ) {}

  async VerifyLogin(
    username: string,
    password: string
  ): Promise<VerifiedToken> {
    const foundUser = await this.repository.findOne({ name: username });

    if (!foundUser)
      throw new AppError({
        description: "User does not existtttttttttt",
        httpCode: HttpCode.UNAUTHORIZED_401,
      });

    if (!bcrypt.compareSync(password, foundUser.password))
      throw new AppError({
        description: "Password is not correct",
        httpCode: HttpCode.UNAUTHORIZED_401,
      });

    return {
      user: foundUser,
      token: foundUser.generateAuthToken(),
    };
  }
}
