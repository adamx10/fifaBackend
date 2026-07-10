import express from "express";
import AffectationController from "../controllers/affectation.controller.js";
// import { validateAffectation } from "../middlewares/validate.middleware.js";

const router = express.Router();


router.get("/", AffectationController.getAllAffectations);
router.get("/:id", AffectationController.getAffectationById);
router.post("/", AffectationController.createAffectation);
router.put("/:id", AffectationController.updateAffectation);
router.delete("/:id", AffectationController.deleteAffectation);

export default router;