import express from "express";
import { EmailController } from "../controllers/emailController.js";

const emailRouter = express.Router();
const emailController = new EmailController();

emailRouter.get("/:id", emailController.getEmailById);
emailRouter.get("/", emailController.getEmail);

emailRouter.post("/", emailController.addEmail);
// emailRouter.post("/:id", emailController.addEmail);
emailRouter.delete("/:id", emailController.deleteEmail);
emailRouter.put("/:id", emailController.updateEmail);

export {
    emailRouter
}

