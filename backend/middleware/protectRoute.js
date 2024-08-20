import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import cookieParser from "cookie-parser";

const protectRoute = async (req,res,next) =>{
    try {
        //we are trying to get the cookies, we can't get it directly so we need cookie parser
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({error:"Unauthorized-No token Provided"});
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded){
            return res.status(401).json({error:"Unauthorized - Invalid token"})
        }

        const user = await User.findById(decoded.userId).select("-password");
        if(!user){
            return res.status(404).json({error:"User not found"});
        }
        //so now we got the currently authenticated user
        req.user = user;
        //aage ki saare chije hone ke baad ham next ko call karenge jo ki sendMessage hai
        next()
    } catch (error) {
        console.log("Error in protectRoute middleware: ",error.message)
        res.status(500).json({error:"Internal server errror"});
    }
}
export default protectRoute;