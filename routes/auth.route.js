import express from "express";
import { authController } from "../controllers/auth.controllers.js";
import {validation,registerSchema, loginSchema} from "../middlewares/validate.middlewares.js";
import authenticate from "../middlewares/authenticate.js";
import authorize from "../middlewares/auth.js";
const routes = express.Router();

routes.post("/register",validation(registerSchema), authController.register);
routes.post("/login",validation(loginSchema), authController.login);

routes.post(
  "/register",
  authenticate,
  authorize("admin"),
  validation(registerSchema),
  authController.register
);


routes.post(
  "/login",
  validation(loginSchema),
  authController.login
);



routes.get(
  "/me",
  authenticate,
  authController.me
);


export default routes;