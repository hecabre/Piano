import { Router } from "express";
import {
  login,
  register,
  profile,
  logout,
  addChild,
} from "../controllers/tutor.controller.js";
import { authTutor } from "../middlewares/validateTutor.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/profile", authTutor, profile);
router.post("/register/child", authTutor, addChild);

export default router;
