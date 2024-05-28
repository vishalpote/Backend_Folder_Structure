import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connection } from './database/database';
import router from './routes/user.routes';
const app=express();
dotenv.config();


const port = process.env.PORT || 8090;

app.use(express.json());
app.use(cors());

//all route here
app.use('/api/v1',router);


//here i add the mongodb connection 
connection();

// here is a port of backend server
app.listen(port,()=>{
    console.log(`Port Is Running On http://localhost:${port}`)
})

