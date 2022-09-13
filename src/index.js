import express from "express";
import dotenv from "dotenv";
import userRoute from "./router/user.js";
import postRoute from "./router/posts.js";
import mongoose from "mongoose";

dotenv.config();
const PORT = 3000;

const app = express();
app.use(express.json());
app.use("/user", userRoute);
app.use("/posts", postRoute);

mongoose.connect(process.env.DB_CONNECTION, () =>
  console.log("mongodb connected")
);

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
