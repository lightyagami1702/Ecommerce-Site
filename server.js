import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
import path from "path";
import {fileURLToPath} from 'url';
//env config
dotenv.config();

//databaseConfig
connectDB();
//file to path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//app config
const app = express();

//port
const port = process.env.PORT || 8080;

//middleware (bodyparser)
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./client/build")));
//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);
//get request
app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//app listening
app.listen(port, () => {
  console.log(`the server is running on Port ${port}`);
});
