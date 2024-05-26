import express from "express";
import { createUser, loginUser } from "./userController";


const userRouter = express.Router();

//Routes
userRouter.use("/register",createUser);
userRouter.use("/login",loginUser)


export default userRouter;