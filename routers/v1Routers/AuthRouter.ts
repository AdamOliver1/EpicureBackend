import { ChefController } from "./../../controllers/ChefController";
import express from "express";
import TYPES from "../../factory/types";
import { container } from "../../factory/inversify.config";
import { AuthController } from "../../controllers/authController";
import { validator } from "../../middlewares/validator";
import { loginSchema } from "../../helpers/validationHelper";
import { authUpdater } from "../../middlewares/auth/updaterAuth";
const AuthRouter = express.Router();
const controller = container.get<AuthController>(TYPES.AuthController);

AuthRouter.post("/", validator(loginSchema),controller.signIn);
AuthRouter.post('/signup/confirm', controller.confirmSignUp);
AuthRouter.post('/signup', controller.signUp);
AuthRouter.get('/profile',authUpdater, controller.getProfile);
export { AuthRouter };
