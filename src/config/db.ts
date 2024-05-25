import { config } from "../config/config";
import mongoose from "mongoose";

const connectDb = async () => {
  try {
    // After connection it will run
    mongoose.connection.on("connected", () => {
      console.log("Connected to the database successfully");
    });

    // After connection sometime fails again
    mongoose.connection.on("error", (err) => {
      console.log("Error in connecting database", err);
    });
    await mongoose.connect(config.databaseUrl as string);
  } catch (error) {
    console.log("Failed to connect to the database", error);
    process.exit(1);
  }
};

export default connectDb;
