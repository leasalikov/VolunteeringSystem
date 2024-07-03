import express from "express";
import { VolunteerController } from "../controllers/volunteerController.js";

const volunteerRouter = express.Router();
const volunteerController = new VolunteerController();

// volunteerRouter.get("/:id", volunteerController.getVolunteerById);
// volunteerRouter.get("/", volunteerController.getVolunteer);

volunteerRouter.post("/", volunteerController.addVolunteer);
// volunteerRouter.post("/:id", volunteerController.addVolunteer);
// volunteerRouter.delete("/:id", volunteerController.deleteVolunteer);
// volunteerRouter.put("/:id", volunteerController.updateVolunteer);

export {
    volunteerRouter
}

