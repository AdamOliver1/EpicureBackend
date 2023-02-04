import { ChefController } from "./../../controllers/ChefController";
import express from "express";
import TYPES from "../../factory/types";
import { container } from "../../factory/inversify.config";
import { validator } from "../../middlewares/validator";
import { loginSchema } from "../../helpers/validationHelper";
import { AuthController } from "../../controllers/authController";
const AuthRouter = express.Router();
const controller = container.get<AuthController>(TYPES.AuthController);

AuthRouter.post("/", validator(loginSchema),controller.Login);
export { AuthRouter };
