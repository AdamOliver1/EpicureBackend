import express, { Request, Response, Router } from "express";
import { IDishHandler } from "../handlers/interfaces/modelsInterfaces";
import  BaseController from "./BaseController";

export class DishController extends BaseController{

    handler: IDishHandler;
    constructor(handler: IDishHandler) {
        super();
        this.handler = handler;
    }

    getAll = async (req: Request, res: Response) => {
        try {

            if(req.query.populate === 'true'){
                const items = await this.handler.getAll("restaurant")
                res.send(items);

            }else{
                const items = await this.handler.getAll();
                res.send(items);
            }
         
          } catch (err: any) {
            console.log(err);
          }
      
      };


  

}
