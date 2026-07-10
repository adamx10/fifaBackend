import express from "express";
import { authController } from "../controllers/auth.controllers.js";
import {validation,registerSchema, loginSchema} from "../middlewares/validate.middlewares.js"
const routes = express.Router();

routes.post("/register",validation(registerSchema), authController.register);
routes.post("/login",validation(loginSchema), authController.login);


export default routes;