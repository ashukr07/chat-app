import express from "express";
import {login, logout,signup} from "../controllers/auth.controller.js"

const router = express.Router();

//now writing the logic here is not that feasible so we will write all that in the controller file
router.post("/signup",signup);

router.post("/login",login);

router.post("/logout",logout);

//this rouiter is exported so if anyone go for api/auth like something after that endpoints are handled here
export default router;