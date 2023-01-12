import { RestaurantController } from './../controllers/RestaurantController';
import { DishController } from './../controllers/DishController';
import { ChefController } from './../controllers/ChefController';
// import 'reflect-metadata';
import { RestaurantHandler } from './../handlers/RestaurantHandler';
import { IDishHandler, IRestaurantHandler } from './../handlers/interfaces/modelsInterfaces';
import { Container } from "inversify";
import { ChefHandler } from "../handlers/ChefHandler";
import { IChefHandler } from "../handlers/interfaces/modelsInterfaces";
import { ChefRepository } from "../repositories/ChefRepository";
import { IChefRepository, IDishRepository, IRestaurantRepository } from "../repositories/Interfaces/ModelsRepositories";
import { DishRepository } from '../repositories/DishRepository';
import { RestaurantRepository } from '../repositories/RestaurantRepository';
import { DishHandler } from '../handlers/DishHandler';
import TYPES from './types';



    const container = new Container();
    console.log("container");
    console.log(container);
    
    container.bind<IChefRepository>(TYPES.IChefRepository).to(ChefRepository).inSingletonScope();
    container.bind<IDishRepository>(TYPES.IDishRepository).to(DishRepository).inSingletonScope();
    container.bind<IRestaurantRepository>(TYPES.IRestaurantRepository).to(RestaurantRepository).inSingletonScope();
    
    container.bind<IChefHandler>(TYPES.IChefHandler).to(ChefHandler).inSingletonScope();
    container.bind<IDishHandler>(TYPES.IDishHandler).to(DishHandler).inSingletonScope();
    container.bind<IRestaurantHandler>(TYPES.IRestaurantHandler).to(RestaurantHandler).inSingletonScope();
    
    container.bind<ChefController>(TYPES.ChefController).to(ChefController);
    container.bind<DishController>(TYPES.ChefController).to(DishController);
    // container.bind<RestaurantController>(TYPES.ChefController).to(RestaurantController);
    
    export {container,TYPES};

// const logger = container.get<InversifyLogger>(TYPES.Logger);
// const fileSystem = container.get<InversifyFileSystem>(TYPES.FileSystem);
// const settingsService = container.get<SettingsTxtService>(TYPES.SettingsService);