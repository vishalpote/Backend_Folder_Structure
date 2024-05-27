import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connection } from './database/database';
const app=express();
dotenv.config();


const port = process.env.PORT || 8090;

app.use(express.json());
app.use(cors());


//here i add the mongodb connection 
connection();

// here is a port of backend server
app.listen(port,()=>{
    console.log(`Port Is Running On http://localhost:${port}`)
})

