import express from "express";
import { protectRoute } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
import { generatePortfolioFromJson, getDescription, getPortfolio, getResumeDescription } from "../controllers/uplode.controller.js";

const router = express.Router();

// routes
router.post("/resume", upload.single("resume"),getResumeDescription);
router.post("/description", getDescription);
router.post("/generatePortfolio", generatePortfolioFromJson);
router.post("/getHtmlandCss/:id", getPortfolio);

export default router;