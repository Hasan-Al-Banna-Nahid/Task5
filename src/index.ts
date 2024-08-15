const express = require("express");
const cors = require("cors");
const { userRouter } = require("./routes/userRoutes");
import { METHODS } from "http";
import mongoose from "mongoose";
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.DB_URL!)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit(1);
  });
const corsConfig = {
  origin: "*",
  Credential: true,
  METHODS: ["Get", "POST", "PUT", "PATCH", "DELETE", "Options"],
};
app.use(cors(corsConfig));
app.use(express.json());
app.use("/api/users", userRouter);

export default app;
