

const TYPES = {
    IChefRepository: Symbol.for("IChefRepository"),
    IDishRepository: Symbol.for("IDishRepository"),
    IRestaurantRepository: Symbol.for("IRestaurantRepository"),
    IChefHandler:Symbol.for("IChefHandler"),
    IDishHandler:Symbol.for("IDishHandler"),
    IRestaurantHandler:Symbol.for("IRestaurantHandler"),

    ChefController:Symbol.for("ChefController"),
    DishController:Symbol.for("DishController"),
    // RestaurantController:Symbol.for("RestaurantController"),
};

export default TYPES;