import express from "express";
import { getMessages, sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";
const router = express.Router();

router.get("/:id", protectRoute,getMessages);
//before running sendMessage just check if the user is logged in 
//so only the user who are logged in will be able to sent the message
router.post("/send/:id",protectRoute,sendMessage)

export default router;