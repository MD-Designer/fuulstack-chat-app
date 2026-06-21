import mongoose from "mongoose";
import dns from "node:dns/promises";
dns.setServers(["1.1.1.1", "1.0.0.1"]);

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected:${mongoose.connection.host}`);
  } catch (error) {
    console.error(`Failed database connection, ${error.message}`);
    process.exit(1);
  }
};
