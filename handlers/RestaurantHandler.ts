import { IRestaurantRepository } from "../DAL/Interfaces/ModelsRepositories";
import { IRestaurantHandler } from "./interfaces/modelsInterfaces";
import { BaseHandler } from "./BaseHandler";
import { inject, injectable } from "inversify";
import TYPES from "../factory/types";
import IRestaurant from "../models/Restaurant";

@injectable()
export class RestaurantHandler
  extends BaseHandler<IRestaurant>
  implements IRestaurantHandler
{
  constructor(
    @inject(TYPES.IRestaurantRepository)
    protected readonly repository: IRestaurantRepository
  ) {
    super();
  }
  async getLimited(limit: number): Promise<IRestaurant[]> {
    return await this.repository.getLimited(3);
  }

  async getByChef(chefId:string): Promise<IRestaurant[]> {
    return await this.repository.getByChef(chefId);
  }

  deletePermanently(id: string): Promise<any> {
    throw new Error("Method not implemented.");
  }
}
