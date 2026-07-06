import express from "express";
import AffectationController from "../controllers/affectation.controller.js";
import { validateAffectation } from "../middlewares/validate.middleware.js";

const router = express.Router();


router.get("/",validateAffectation, AffectationController.getAllAffectations);
router.get("/:id",validateAffectation, AffectationController.getAffectationById);
router.post("/", validateAffectation,AffectationController.createAffectation);
router.put("/:id",validateAffectation, AffectationController.updateAffectation);
router.delete("/:id",validateAffectation, AffectationController.deleteAffectation);

export default router;