import express from "express";
import MatchController from "../controllers/match.controller.js";
// import {validateMatch} from "../middlewares/validate.middleware.js"

const routerMatch = express.Router();

routerMatch.get("/", MatchController.getAllMatches);

routerMatch.get("/:id", MatchController.getMatchById);

routerMatch.post("/", MatchController.createMatch);

routerMatch.put("/:id", MatchController.updateMatch);

routerMatch.delete("/:id", MatchController.deleteMatch);

export default routerMatch;