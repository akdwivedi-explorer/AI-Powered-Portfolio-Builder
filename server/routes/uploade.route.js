import express from "express";
import { protectRoute } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
import { getDescription, getLinkedinDescription, getResumeDescription } from "../controllers/uplode.controller.js";

const router = express.Router();

// routes
router.post("/resume", protectRoute ,upload.single("resume"),getResumeDescription);
router.post("/description", protectRoute, getDescription);
router.get("/linkdin", protectRoute, getLinkedinDescription);

export default router;