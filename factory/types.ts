

const TYPES = {
    IChefRepository: Symbol.for("IChefRepository"),
    IDishRepository: Symbol.for("IDishRepository"),
    IRestaurantRepository: Symbol.for("IRestaurantRepository"),
    IUserRepository: Symbol.for("IUserRepository"),


    IChefHandler:Symbol.for("IChefHandler"),
    IDishHandler:Symbol.for("IDishHandler"),
    IRestaurantHandler:Symbol.for("IRestaurantHandler"),
    ICrossFilteringHandle:Symbol.for("ICrossFilteringHandle"),
    IUserHandler:Symbol.for("IUserHandler"),
    IAuthHandler:Symbol.for("IAuthHandler"),
    

    ChefController:Symbol.for("ChefController"),
    DishController:Symbol.for("DishController"),
    RestaurantController:Symbol.for("RestaurantController"),
    FilterController:Symbol.for("FilterController"),
    AuthController:Symbol.for("AuthController"),
    
};

export default TYPES;