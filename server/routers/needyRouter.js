import express from "express";
import { NeedyController } from "../controllers/needyController.js";

const needyRouter = express.Router();
const needyController = new NeedyController();

needyRouter.get("/:id", needyController.getVolunteerById);
needyRouter.get("/", needyController.getVolunteer);
needyRouter.post("/", needyController.addNeedy);
// needyRouter.post("/:id", needyController.addVolunteer);
needyRouter.delete("/:id", needyController.deleteVolunteer);
needyRouter.put("/:id", needyController.updateVolunteer);

export {
    needyRouter
}