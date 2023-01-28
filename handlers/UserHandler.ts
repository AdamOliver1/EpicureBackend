import { inject, injectable } from "inversify";
import { IUserRepository } from "../DAL/Interfaces/ModelsRepositories";
import TYPES from "../factory/types";
import IUser from "../models/User";
import { BaseHandler } from "./BaseHandler";
import { IUserHandler } from "./interfaces/modelsInterfaces";

@injectable()
export class UserHandler extends BaseHandler<IUser> implements IUserHandler {
  constructor(
    @inject(TYPES.IUserRepository)
    protected readonly repository: IUserRepository
  ) {
    super();
  }
  deletePermanently(id: string): Promise<any> {
    throw new Error("Method not implemented.");
  }

  checkPassword(user: IUser, password: string): boolean {
    if (user.password !== password) return false;
    return true;
  }
}
