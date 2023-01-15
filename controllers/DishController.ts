import express, { Request, Response, Router } from "express";
import { inject } from "inversify";
import TYPES from "../factory/types";
import { IDishHandler } from "../handlers/interfaces/modelsInterfaces";
import BaseController from "./BaseController";

export class DishController extends BaseController {
  
  constructor(
    @inject(TYPES.IChefHandler) protected readonly handler: IDishHandler
  ) {
    super();
  }

  
}
