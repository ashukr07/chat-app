import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";


import connectToMongoDB from "./db/connectToMongoDB.js";


const PORT = process.env.PORT || 5000;

dotenv.config()

//to parse the incoming requests with JSON payloads (from req.body)
app.use(express.json());
app.use(cookieParser())

//yaha pr bahut saare app.get likhna feasible nahi hoga it will become clumsy so we can use the middleware so 
//so whenever we call this api/auth route it will call this authRoutes 
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);



// app.get("/",(req,res)=>{
//     //root route
//     res.send("hello world")
// })


server.listen(PORT,()=> {
    connectToMongoDB()
    console.log(`Server running on port ${PORT}`)
});