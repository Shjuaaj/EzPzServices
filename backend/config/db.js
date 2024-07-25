import mongoose from "mongoose";
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();
export const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB).then(() => console.log("DB Connected"))
}