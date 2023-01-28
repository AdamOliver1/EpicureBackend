import { ROLE } from "../../models/Role";
import { injectable } from "inversify";
import IUser from "../../models/User";
import { User } from "../dbModels/UserModel";
import { exists } from "../helpers/filters";
import { fieldPipe } from "../helpers/matchHelper";
import { IUserRepository } from "../Interfaces/ModelsRepositories";
import BaseRepository from "./BaseRepository";

@injectable()
export class UserRepository
  extends BaseRepository<IUser>
  implements IUserRepository
{
  constructor() {
    super(User);
  }

  async createUser(
    username: string,
    password: string,
    role?: ROLE
  ): Promise<IUser> {
    const newItem = this.model.create({ name: username, password, role });
    return newItem;
  }

  filterByName(name: string): Promise<IUser[]> {
    return this.filterMultipleOptions([fieldPipe("name", name)]);
  }

  async findById(id: string): Promise<IUser | null> {
   return await this.model.findById(id);
  }
  async findOne(compare: {}): Promise<IUser | null> {
    return await this.model.findOne(compare);
  }
  async getAllExists(): Promise<IUser[]> {
    return await this.model.aggregate([{ $match: exists() }]);
  }
}
