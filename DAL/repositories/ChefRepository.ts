import { AppError } from "./../../Error/appError";
import { fieldPipe, idPipe } from "../helpers/matchHelper";
import { Chef } from "../dbModels/ChefModel";
import BaseRepository from "./BaseRepository";
import { injectable } from "inversify";
import IChef from "../../models/Chef";
import { IChefRepository } from "../Interfaces/ModelsRepositories";
import { exists } from "../helpers/filters";
import { IsChefOfTheWeek } from "../../models/ChefOfTheWeek";
import { HttpCode } from "../../Error/httpCode";

@injectable()
export class ChefRepository
  extends BaseRepository<IChef>
  implements IChefRepository
{
  async getAllExists(): Promise<IChef[]> {
    return await this.model.aggregate([{ $match: exists() }]);
  }

  constructor() {
    super(Chef);
  }
  async getChefOfTheWeek(): Promise<IChef | null> {
    //  isChefOfTheWeek?:IsChefOfTheWeek;
    return await this.model
      .findOne({ isChefOfTheWeek: IsChefOfTheWeek.Yes })
      .exec();
  }

  async updateChefOfTheWeek(id: string): Promise<IChef | null> {
    //  isChefOfTheWeek?:IsChefOfTheWeek;
    const oldChef = await this.model
      .findOne({ isChefOfTheWeek: IsChefOfTheWeek.Yes })
      .exec();
    if (oldChef) {
      this.update(oldChef?._id, {
        isChefOfTheWeek: IsChefOfTheWeek.WasAlready,
      } as IChef);
    }
    const newChef = await this.model.findById(id).exec();
    if (!newChef)
      throw new AppError({
        description: "Invalid Chef ID",
        httpCode: HttpCode.NOT_FOUND_404,
      });
    this.update(id, { isChefOfTheWeek: IsChefOfTheWeek.Yes } as IChef);
    return newChef;
  }

  async findById(id: string): Promise<IChef | null> {
    return await this.model.findById(id);
  }

  async filterByName(name: string): Promise<IChef[]> {
    return this.filterMultipleOptions([fieldPipe("name", name)]);
  }

  async filterAllStrings(text: string): Promise<IChef[]> {
    return this.filterMultipleOptions([
      fieldPipe("name", text),
      fieldPipe("description", text),
    ]);
  }
}
