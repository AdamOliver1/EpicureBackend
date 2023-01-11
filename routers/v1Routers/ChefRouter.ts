import { ChefRepository } from './../../repositories/ChefRepository';
import { ChefHandler } from './../../handlers/ChefHandler';
import { ChefController } from './../../controllers/ChefController';
import { DishRepository } from './../../repositories/DishRepository';
import { DishHandler } from './../../handlers/DishHandler';
import { DishController } from './../../controllers/DishController';
import express from "express";

const ChefRouter = express.Router();

const controller = new ChefController( new ChefHandler(new ChefRepository()));

ChefRouter.get("/chef", controller.getAll);
ChefRouter.put("/chef/:id", controller.update);
ChefRouter.post("/chef", controller.create);
ChefRouter.delete("/chef/:id", controller.delete);

export { ChefRouter  };
