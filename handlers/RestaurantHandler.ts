import { IChefRepository, IDishRepository, IRestaurantRepository } from "../DAL/Interfaces/ModelsRepositories";
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
    protected readonly repository: IRestaurantRepository,
    @inject(TYPES.IDishRepository)
    protected readonly dishRepository: IDishRepository,
    @inject(TYPES.IChefRepository)
    protected readonly chefRepository: IChefRepository,
  
  ) {
    super();
  }
  async getLimited(limit: number): Promise<IRestaurant[]> {
    return await this.repository.getLimited(3);
  }

  async getByChef(chefId:string): Promise<IRestaurant[]> {
    return await this.repository.getByChef(chefId);
  }

  async disable(id: string): Promise<any> {
    const restaurant = await this.repository.findById(id);
    if(restaurant?._id){
      const dishes = await this.dishRepository.getDishesByRestaurant(restaurant?._id);
      dishes.forEach(d =>{ if(d._id) this.dishRepository.Disable(d._id)})
    // if(restaurant.chef._id) await this.chefRepository.Disable(restaurant?.chef._id);
    }
   
    return await this.repository.Disable(id);
  }

  deletePermanently(id: string): Promise<any> {
    throw new Error("Method not implemented.");
  }
}
