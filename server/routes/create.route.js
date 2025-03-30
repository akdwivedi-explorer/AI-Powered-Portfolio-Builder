import express from "express";
import { protectRoute } from "../middlewares/auth.middleware.js";
import { createPortfolio } from "../controllers/create.controller.js";

const router = express.Router();

// routes
router.post("/portfolio/:portfolioId", createPortfolio)

export default router;