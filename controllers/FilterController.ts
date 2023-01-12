import {
  IRestaurantHandler,
  IDishHandler,
  IChefHandler,
} from "./../handlers/interfaces/modelsInterfaces";
import express, { Request, Response, Router } from "express";
import { container, TYPES } from "../factory/inversify.config";
import { inject, injectable } from "inversify";

@injectable()
export class FilterController {
  chefHandler: IChefHandler;// = container.get<IChefHandler>(TYPES.IChefHandler);
  restaurantHandler: IRestaurantHandler;// = container.get<IRestaurantHandler>(
  //   TYPES.IRestaurantHandler
  // );
   dishHandler: IDishHandler ;//= container.get<IDishHandler>(TYPES.IDishHandler);

  // constructor(readonly  IChefHandler: IChefHandler) // @inject(TYPES.IChefHandler)  readonly  IChefHandler: IChefHandler,
  // // @inject(TYPES.IRestaurantHandler)  readonly  IRestaurantHandler: IRestaurantHandler,
  // // @inject(TYPES.IDishHandler)  readonly  IDishHandler: IDishHandler,
  // {
    constructor(
      readonly  IChefHandler: IChefHandler,
      readonly  IRestaurantHandler: IRestaurantHandler,
      readonly  IDishHandler: IDishHandler
      ) // @inject(TYPES.IChefHandler)  readonly  IChefHandler: IChefHandler,
    // @inject(TYPES.IRestaurantHandler)  readonly  IRestaurantHandler: IRestaurantHandler,
    // @inject(TYPES.IDishHandler)  readonly  IDishHandler: IDishHandler,
    {
    this.chefHandler = IChefHandler;
    this.restaurantHandler = IRestaurantHandler;
    this.dishHandler = IDishHandler;
  }

  filterAllByName = async (req: Request, res: Response) => {
    try {
      console.log(req.query.name);
      console.log(typeof req.query.name === "string");

      if (typeof req.query.name === "string") {
        const { name } = req.query;
        //    const ress = await Promise.all([
        //     this.chefHandler.filterByName(name),
        //     this.restaurantHandler.filterByName(name),
        //     this.dishHandler.filterByName(name)
        //    ]);
        //    res.send({
        //     Chefs,
        //     restaurant,
        //     dish
        // })
        //TODO add promise all
        const Chefs = await this.chefHandler.filterByName(name);
        const restaurant = await this.restaurantHandler.filterByName(name);
        const dish = await this.dishHandler.filterByName(name);
        res.send({
          Chefs,
          restaurant,
          dish,
        });
      } else {
        throw new Error(
          "A name is required to filter with. Please provide a valid name and try again."
        );
      }
    } catch (err: any) {
      console.log(err);
    }
  };
}
