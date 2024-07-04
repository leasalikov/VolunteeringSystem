// const express = require('express');



// import express from "express";
// import { sendEmail }  from '../service/EmailService';

// const EmailRouter = express.Router();
// const EmailController = new emailController();

// // needyRouter.get("/:id", emailController.getVolunteerById);
// // emailRouter.get("/", emailController.getemail);
// emailRouter.post("/", emailController.sendEmail);
// // needyRouter.post("/:id", needyController.addVolunteer);
// // needyRouter.delete("/:id", emailController.deleteVolunteer);
// // needyRouter.put("/:id", emailController.updateVolunteer);

// export {
//     emailRouter
// }




import express from "express";
import { emailController } from "../controllers/emailController.js";
import { EmailController } from "../controllers/emailController.js";

const emailRouter = express.Router();
const emailController = new EmailController();

// needyRouter.get("/:id", emailController.getVolunteerById);
emailRouter.post("/", emailController.postemail);
// emailRouter.post("/", emailController.addemail);
// needyRouter.post("/:id", needyController.addVolunteer);
// needyRouter.delete("/:id", emailController.deleteVolunteer);
// needyRouter.put("/:id", emailController.updateVolunteer);

export {
    emailRouter
}