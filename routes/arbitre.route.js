import express from "express";
import ArbiterController from "../controllers/arbitre.controller.js";
import { validationArbitre } from "../middlewares/validate.middleware.js";
const routerArbitre = express.Router();

routerArbitre.get("/",validationArbitre, ArbiterController.ArbiteGetAll);
routerArbitre.get("/:id", validationArbitre,ArbiterController.getArbitreById);
routerArbitre.post("/", validationArbitre,ArbiterController.createArbitre);
routerArbitre.put("/:id",validationArbitre ,ArbiterController.updateArbitre);
routerArbitre.delete("/:id",validationArbitre,ArbiterController.deleteArbitre);

export default routerArbitre;