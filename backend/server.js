import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";

import productRoutes from "./routes/productRoutes.js";

const app = express();
dotenv.config();

connectDB();

app.use("/api/products", productRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server started on port ", process.env.PORT);
});
