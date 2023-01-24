import { injectable } from 'inversify';
import IUser from "../../models/User";
import { User } from '../dbModels/UserModel';
import { exists } from '../helpers/filters';
import { fieldPipe } from '../helpers/matchHelper';
import { IUserRepository } from "../Interfaces/ModelsRepositories";
import BaseRepository from "./base/BaseRepository";

@injectable()
export class UserRepository
  extends BaseRepository<IUser>
  implements IUserRepository
{
    constructor() {
        super(User);
      }
  filterByName(name: string, populate?: string): Promise<IUser[]> {
    return this.filterMultipleOptions([fieldPipe("name",name)]);
  }

  findById(id: string): Promise<IUser> {
    throw new Error("Not implemented");
  }
 async  getAllExists(): Promise<IUser[]> {
    return await this.model.aggregate([{ $match: exists() }]);
  }
}
