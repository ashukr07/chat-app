import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        minlength:6,
    },
    gender:{
        type:String,
        required:true,
        enum:["male","female"]
    },
    profilePic:{
        type:String,
        default:"",
    }
    //createdAt,updateAt =>
},{timestamps:true})
//now we need to create a model based on this inferred schema
const User = mongoose.model("User",userSchema);
export default User