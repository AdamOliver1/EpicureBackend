import { Status } from "./../models/status";
import { ChefRepository } from "../db/repositories/ChefRepository";
import { RestaurantRepository } from "../db/repositories/RestaurantRepository";
import { DishRepository } from "../db/repositories/DishRepository";
import { Tags } from "../models/Tags";

export const initData = async () => {
  const chefRepository = new ChefRepository();
  const restaurantRepository = new RestaurantRepository();
  const dishRepository = new DishRepository();

  const chefs = await chefRepository.getAllExists();
  const restaurant = await restaurantRepository.getAllExists();
  const dishes = await dishRepository.getAllExists();

  if (chefs.length == 0 && restaurant.length == 0 && dishes.length == 0) {
    const chef1 = await chefRepository.create({
      name: "Yossi Shitrit",
      image: "https://res.cloudinary.com/do7fhccn2/image/upload/v1673797545/Epicure/assets/Chef_frn3ak.svg",
      description:
        "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.",
    });
    const chef2 = await chefRepository.create({
      name: "Ran Shmueli",
      image: "https://res.cloudinary.com/do7fhccn2/image/upload/v1673797545/Epicure/assets/Chef_frn3ak.svg",
      description:
        "Chef John is a professional Chef with over 10 years of experience",
    });
    const chef3 = await chefRepository.create({
      name: "Meir Adoni",
      image: "https://res.cloudinary.com/do7fhccn2/image/upload/v1673797545/Epicure/assets/Chef_frn3ak.svg",
      description:
        "Chef Sarah is a professional Chef with over 20 years of experience",
    });
    const chef4 = await chefRepository.create({
      name: "Yanir Green",
      image: "https://res.cloudinary.com/do7fhccn2/image/upload/v1673797545/Epicure/assets/Chef_frn3ak.svg",
      description:
        "Chef Sarah is a professional Chef with over 20 years of experience",
    });

    const restaurant1 = await restaurantRepository.create({
      name: "Onza",
      image: "https://res.cloudinary.com/do7fhccn2/image/upload/v1673797546/Epicure/assets/onza_hzajew.svg",
      stars:4 ,
      chef: chef1,
    });
    const restaurant2 = await restaurantRepository.create({
      name: "Kitchen Market",
      image: "https://res.cloudinary.com/do7fhccn2/image/upload/v1673797547/Epicure/assets/kitchenMarket_tyo9qe.svg",
      stars:4,
      chef: chef2,
    });
    const restaurant3 = await restaurantRepository.create({
      name: "Mashya",
      image: "https://res.cloudinary.com/do7fhccn2/image/upload/v1673797547/Epicure/assets/mashya_fpydw6.svg",
      stars:5,
      chef: chef3,
    });
    const restaurant4 = await restaurantRepository.create({
      name: "Claro",
      image: "https://res.cloudinary.com/do7fhccn2/image/upload/v1673797549/Epicure/assets/dishes/claro_ntawtt.svg",
      stars:5,
      chef: chef2,
    });
    const restaurant5 = await restaurantRepository.create({
      name: "Lumina",
      image: "https://res.cloudinary.com/do7fhccn2/image/upload/v1673797546/Epicure/assets/dishes/lumina_qblhpr.svg",
      stars:4,
      chef: chef3,
    });

    const dish1 = await dishRepository.create({
      name: "Pad Ki Mao",
      price: 20,
      ingredients: ["chicken", "tomatoes", "onions"],
      tags: [Tags.SPICY, Tags.VEGAN],
      restaurant: restaurant1,
      image:"https://res.cloudinary.com/do7fhccn2/image/upload/v1673797549/Epicure/assets/dishes/padKiMao_p2hrrb.svg"
    });
    const dish2 = await dishRepository.create({
      name: "Garbanzo Frito",
      price: 25,
      ingredients: ["beef", "potatoes", "carrots"],
      tags: [],
      restaurant: restaurant2,
      image:"https://res.cloudinary.com/do7fhccn2/image/upload/v1673797550/Epicure/assets/dishes/garbanzoFrito_alquka.svg"
    });
    const dish3 = await dishRepository.create({
      name: "Smoked Pizza",
      price: 30,
      ingredients: ["shrimp", "zucchini", "mushrooms"],
      tags: [Tags.SPICY],
      restaurant: restaurant3,
      image:"https://res.cloudinary.com/do7fhccn2/image/upload/v1673797550/Epicure/assets/dishes/smokedPizza_hnl5yp.svg"
    });
    const dish4 = await dishRepository.create({
      name: "John's Favorite",
      price: 18,
      ingredients: ["pork", "eggplant", "peppers"],
      tags: [Tags.VEGETARIAN],
      restaurant: restaurant4,
      image:"https://res.cloudinary.com/do7fhccn2/image/upload/v1673797550/Epicure/assets/dishes/smokedPizza_hnl5yp.svg"

    });
    const dish5 = await dishRepository.create({
      name: "Michael's Creation",
      price: 22,
      ingredients: ["salmon", "spinach", "onions"],
      tags: [Tags.VEGETARIAN],
      restaurant: restaurant5,
      image:"https://res.cloudinary.com/do7fhccn2/image/upload/v1673797550/Epicure/assets/dishes/smokedPizza_hnl5yp.svg"

    });

    const dish7 = await dishRepository.create({
      name: "John's Specialty",
      price: 24,
      ingredients: ["lamb", "squash", "tomatoes"],
      tags: [Tags.VEGETARIAN],
      restaurant: restaurant4,
      image:"https://res.cloudinary.com/do7fhccn2/image/upload/v1673797550/Epicure/assets/dishes/smokedPizza_hnl5yp.svg"

    });
    const dish8 = await dishRepository.create({
      name: "Michael's Masterpiece",
      price: 32,
      ingredients: ["scallops", "leeks", "asparagus"],
      tags: [],
      restaurant: restaurant2,
      image:"https://res.cloudinary.com/do7fhccn2/image/upload/v1673797550/Epicure/assets/dishes/smokedPizza_hnl5yp.svg"

    });
    const dish9 = await dishRepository.create({
      name: "Sarah's Sensation",
      price: 26,
      ingredients: ["mussels", "cauliflower", "potatoes"],
      tags: [],
      restaurant: restaurant1,
      image:"https://res.cloudinary.com/do7fhccn2/image/upload/v1673797550/Epicure/assets/dishes/smokedPizza_hnl5yp.svg"

    });
    const dish10 = await dishRepository.create({
      name: "John's Delicacy",
      price: 22,
      ingredients: ["clams", "cabbage", "onions"],
      tags: [Tags.SPICY],
      restaurant: restaurant1,
      image:"https://res.cloudinary.com/do7fhccn2/image/upload/v1673797550/Epicure/assets/dishes/smokedPizza_hnl5yp.svg"

    });
    const dish11 = await dishRepository.create({
      name: "Michael's Classic",
      price: 30,
      ingredients: ["oysters", "radicchio", "fennel"],
      tags: [Tags.SPICY],
      restaurant: restaurant1,
      image:"https://res.cloudinary.com/do7fhccn2/image/upload/v1673797550/Epicure/assets/dishes/smokedPizza_hnl5yp.svg"

    });
  }
};
