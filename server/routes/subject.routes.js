import { Router } from "express";
import { listSubject } from "../controllers/subject.controller.js";

const router = Router();

router.get("/list", listSubject);

export default router;
