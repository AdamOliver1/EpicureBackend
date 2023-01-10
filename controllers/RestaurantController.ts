import express, { Request, Response, Router } from "express";
import { IRestaurantHandler } from "../handlers/RestaurantHandler";
import { BaseController } from "./BaseController";


// export class RestaurantController {
//   handler: IRestaurantHandler;
//   router: Router;

//   constructor(handler: IRestaurantHandler) {
//     this.handler = handler;
//     this.router = express.Router();
//   }

//     create =  async (req: Request, res: Response) => {
//         console.log(req.body);
        
//     const item = await this.handler.create(req.body);
//     res.send(item);
//   }
// }

export class RestaurantController extends BaseController{


  constructor(handler: IRestaurantHandler) {
   super(handler);
   
  }

}
