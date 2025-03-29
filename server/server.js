import express from "express";
import { connectDB } from "./lib/db.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

//routers import
import authRoutes from "./routes/auth.route.js";
import uplodeRoutes from "./routes/uploade.route.js";
import createRoutes from "./routes/create.route.js";

//middlewares
dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000", // ✅ Adjust based on frontend URL
    credentials: true, // ✅ Allow cookies in CORS
  })
);
app.use("/uploads", express.static("public/uploads"));

//routes
app.use("/api/auth", authRoutes);
app.use("/api/uploads", uplodeRoutes);
app.use("/api/create", createRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectDB();
});
