// require("dotenv").config();

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB();

// import express from "express";
// const app = express()(async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("error:", error);
//       throw error;
//     });
//     app.listner(process.env.PORT, () => {
//       console.log(`app is lisning on port: ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("Error", error);
//   }
// })();
