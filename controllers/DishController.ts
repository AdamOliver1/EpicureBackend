import express, { Request, Response, Router } from "express";
import { IDishHandler } from "../handlers/interfaces/modelsInterfaces";
import { BaseController } from "./BaseController";

export class DishController extends BaseController{

  constructor(handler: IDishHandler) {
   super(handler);
  }

}
