import express from "express";
import { LinkingController } from "../controllers/linkingController.js";

const linkingRouter = express.Router();
const linkingController = new LinkingController();

// needyRouter.get("/:id", linkingController.getVolunteerById);
linkingRouter.get("/", linkingController.addlinking);
linkingRouter.post("/", linkingController.addlinking);
// needyRouter.post("/:id", needyController.addVolunteer);
// needyRouter.delete("/:id", linkingController.deleteVolunteer);
// needyRouter.put("/:id", linkingController.updateVolunteer);

export {
    linkingRouter
}