import express from "express";
import { welcomeService } from "../service/welcome-service";

const router = express.Router();
router.get("/", (req,res) => res.status(200).send(welcomeService.getMessage()));

export default router;