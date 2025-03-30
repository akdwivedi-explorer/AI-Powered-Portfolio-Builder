import express from "express";
import { protectRoute } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
import { convertToInlineCss, generatePortfolioFromJson, getDescription, getGitHubUser, getPortfolio, getResumeDescription } from "../controllers/uplode.controller.js";

const router = express.Router();

// routes
router.post("/resume", upload.single("resume"),getResumeDescription);
router.post("/description", getDescription);
router.post("/github", getGitHubUser);
router.post("/generatePortfolio", generatePortfolioFromJson);
router.post("/getHtmlandCss/:id", getPortfolio);
router.post("/savedPortfolio", convertToInlineCss);

export default router;