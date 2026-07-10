import express from "express"
import { authController } from "../controllers/auth.controllers.js"

const routes = express.Router()

routes.post("/register",authController.register)
routes.post("/login")

export default routes