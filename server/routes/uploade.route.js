import express from "express";
import { protectRoute } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
import { getDescription, getLinkedinDescription, getResumeDescription } from "../controllers/uplode.controller.js";

const router = express.Router();

// routes
router.post("/resume", upload.single("resume"),getResumeDescription);
router.post("/description", getDescription);
router.get("/linkdin", getLinkedinDescription);

export default router;