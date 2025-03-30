import express from "express";
import { connectDB } from "./lib/db.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const app = express();

//routers import
import authRoutes from "./routes/auth.route.js";
import uplodeRoutes from "./routes/uploade.route.js";
import createRoutes from "./routes/create.route.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//middlewares
dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));
app.use(express.text({ type: "text/html" }));
app.use("/portfolios", express.static(path.join(__dirname, "public/portfolios")));
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

app.get("/portfolios/:portfolioId", (req, res) => {
  const {portfolioId} = req.params;
  const filePath = path.join(__dirname, `public/portfolios/${portfolioId}.html`);

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) return res.status(404).send("Portfolio not found");
  
    // Remove duplicate body tag if exists
    const fixedHtml = data.replace(/<body>\s*<body/, "<body").replace(/<\/body>\s*<\/body>/, "</body>");
  
    res.send(fixedHtml);
  });
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectDB();
});
