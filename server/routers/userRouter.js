import express from "express";
import { userController } from '../controllers/userController.js';

const userRouter = express.Router();
const usercontroller = new userController();

userRouter.post("/", usercontroller.addUser);

export {
    userRouter
}