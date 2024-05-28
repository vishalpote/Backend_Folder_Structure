import mongoose, { Document, Schema } from "mongoose";
import { User as IUser } from "../interface/IUser";


const userSchema: Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

interface IUserDocument extends IUser,Document {}

export const User=mongoose.model<IUserDocument>('User',userSchema);