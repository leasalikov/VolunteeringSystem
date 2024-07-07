import express from "express";
import { VolunteerController } from "../controllers/volunteerController.js";

const volunteerRouter = express.Router();
const volunteerController = new VolunteerController();

volunteerRouter.get("/", volunteerController.getVolunteer);
volunteerRouter.post("/", volunteerController.addVolunteer);
volunteerRouter.delete("/:id", volunteerController.deleteVolunteer);

export {
    volunteerRouter
}

