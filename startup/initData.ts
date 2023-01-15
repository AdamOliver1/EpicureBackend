import { Status } from "./../models/status";
import { ChefRepository } from "../db/repositories/ChefRepository";
import { RestaurantRepository } from "../db/repositories/RestaurantRepository";
import { DishRepository } from "../db/repositories/DishRepository";
import { Tags } from "../models/Tags";

export const initData = async () => {
  // return null;
  const chefRepository = new ChefRepository();
  const restaurantRepository = new RestaurantRepository();
  const dishRepository = new DishRepository();

  const chefs = await chefRepository.getAllExists();
  const restaurant = await restaurantRepository.getAllExists();
  const dishes = await dishRepository.getAllExists();

  if (chefs.length == 0 && restaurant.length == 0 && dishes.length == 0) {
    const chef1 = await chefRepository.create({
      name: "Chef John",
      image: "imageUrl1",
      description:
        "Chef John is a professional Chef with over 10 years of experience",
    });
    const chef2 = await chefRepository.create({
      name: "Chef John",
      image: "imageUrl1",
      description:
        "Chef John is a professional Chef with over 10 years of experience",
    });
    const chef3 = await chefRepository.create({
      name: "Chef Sarah",
      image: "imageUrl3",
      description:
        "Chef Sarah is a professional Chef with over 20 years of experience",
    });

    const restaurant1 = await restaurantRepository.create({
      name: "John's Kitchen",
      image: "imageUrl1",
      stars:2,
      chef: chef1,
    });
    const restaurant2 = await restaurantRepository.create({
      name: "Michael's Restaurant",
      image: "imageUrl2",
      stars:4,
      chef: chef2,
    });
    const restaurant3 = await restaurantRepository.create({
      name: "Sarah's Cafe",
      image: "imageUrl3",
      stars:5,
      chef: chef3,
    });
    const restaurant4 = await restaurantRepository.create({
      name: "John's Bistro",
      image: "imageUrl4",
      stars:5,
      chef: chef2,
    });
    const restaurant5 = await restaurantRepository.create({
      name: "Michael's Diner",
      image: "imageUrl5",
      stars:4,
      chef: chef1,
    });

    const dish1 = await dishRepository.create({
      name: "John's Special",
      price: 20,
      ingredients: ["chicken", "tomatoes", "onions"],
      tags: [Tags.SPICY, Tags.VEGAN],
      restaurant: restaurant1,
    });
    const dish2 = await dishRepository.create({
      name: "Michael's Delight",
      price: 25,
      ingredients: ["beef", "potatoes", "carrots"],
      tags: [],
      restaurant: restaurant2,
    });
    const dish3 = await dishRepository.create({
      name: "Sarah's Surprise",
      price: 30,
      ingredients: ["shrimp", "zucchini", "mushrooms"],
      tags: [Tags.SPICY],
      restaurant: restaurant3,
    });
    const dish4 = await dishRepository.create({
      name: "John's Favorite",
      price: 18,
      ingredients: ["pork", "eggplant", "peppers"],
      tags: [Tags.VEGETARIAN],
      restaurant: restaurant4,
    });
    const dish5 = await dishRepository.create({
      name: "Michael's Creation",
      price: 22,
      ingredients: ["salmon", "spinach", "onions"],
      tags: [Tags.VEGETARIAN],
      restaurant: restaurant5,
    });

    const dish7 = await dishRepository.create({
      name: "John's Specialty",
      price: 24,
      ingredients: ["lamb", "squash", "tomatoes"],
      tags: [Tags.VEGETARIAN],
      restaurant: restaurant4,
    });
    const dish8 = await dishRepository.create({
      name: "Michael's Masterpiece",
      price: 32,
      ingredients: ["scallops", "leeks", "asparagus"],
      tags: [],
      restaurant: restaurant2,
    });
    const dish9 = await dishRepository.create({
      name: "Sarah's Sensation",
      price: 26,
      ingredients: ["mussels", "cauliflower", "potatoes"],
      tags: [],
      restaurant: restaurant1,
    });
    const dish10 = await dishRepository.create({
      name: "John's Delicacy",
      price: 22,
      ingredients: ["clams", "cabbage", "onions"],
      tags: [Tags.SPICY],
      restaurant: restaurant1,
    });
    const dish11 = await dishRepository.create({
      name: "Michael's Classic",
      price: 30,
      ingredients: ["oysters", "radicchio", "fennel"],
      tags: [Tags.SPICY],
      restaurant: restaurant1,
    });
  }
};
