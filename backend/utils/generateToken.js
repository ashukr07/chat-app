import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId,res) => {
    //jwt.sign create a token it takes the payload to embedd into the token and takes the secret to verify it
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:'15d'
    })
    //isase pahle token banaya the ab use cookie me set karna hai

    res.cookie("jwt",token,{
        maxAge:15*24*60*60*1000,
        httpOnly:true,//prevent XSS attacks, i.e. cross-site scripting attacks so that cookie is not accessiible via javascript
        sameSite:"strict",//CSRF attacks cross-site request forgery attacks
        secure:process.env.NODE_ENV !== "development"
    })
}
export default generateTokenAndSetCookie;