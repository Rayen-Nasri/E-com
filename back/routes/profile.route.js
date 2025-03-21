import { ChangeUserName , ChnageUserPassword } from "../controllers/profile.controller.js";
import express from "express";

const router = express.Router()

router.post("/reset_userName" , ChangeUserName);
router.post("/reset_userPassword" , ChnageUserPassword);


export default router