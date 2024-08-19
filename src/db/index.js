import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URl}/${DB_NAME}`
    );
    console.log(`connected ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log(`there is some database issue`, error);
    process.exit(1);
  }
};
export default connectDB;
