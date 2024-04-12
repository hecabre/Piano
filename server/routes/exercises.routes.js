import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  exerciseBySubject,
  listExercise,
  exerciseById,
} from "../controllers/exercises.controller.js";

const router = Router();

router.get("/list", listExercise);
router.get("/list/subject", exerciseBySubject);
router.get("/game", exerciseById);

export default router;
