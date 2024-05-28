import { NextFunction, Request, Response } from "express";


export const home=async(req:Request,res:Response,next:NextFunction):Promise<void>=>{
        try {
            res.status(200).json({message:"Hello World!"});
        } catch (error) {
            res.status(500).json({message:"Internal Server Error..!!"});
            next();
        }
}