import express from "express";
import { connectDB } from "./lib/db.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express()

//routers import
import authRoutes from "./routes/auth.route.js";


//middlewares
dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(cors())

//routes
app.use("/api/auth", authRoutes);


const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectDB();
});
