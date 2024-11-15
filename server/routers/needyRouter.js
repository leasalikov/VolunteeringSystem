import express from "express";
import { NeedyController } from "../controllers/needyController.js";

const needyRouter = express.Router();
const needyController = new NeedyController();

needyRouter.get("/:array/:name", needyController.getNeedyByVolunteer);
needyRouter.get("/", needyController.getNeedy);
needyRouter.post("/", needyController.addNeedy);
needyRouter.delete("/:id", needyController.deleteNeedy);

export {
    needyRouter
}