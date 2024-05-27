import { log } from "console";
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const URI = process.env.MONGODB_URI || "mongodb://localhost/your-database-name";
export const connection=async()=>{
    try {
        await mongoose.connect(URI);
        log("MONGODB connection established..!!");
    } catch (error:any) {
        log("Error While Connecting To MongoDB..!!"+error.message);
        
    }
}