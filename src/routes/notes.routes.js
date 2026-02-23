import { Router } from "express";
const router = Router();
import { getData } from "../controllers/notes.controller.js";

router.get("/", getData);

export default router;
