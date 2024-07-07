import express from "express";
import { LinkingController } from "../controllers/linkingController.js";

const linkingRouter = express.Router();
const linkingController = new LinkingController();

linkingRouter.get("/", linkingController.getlinking);
linkingRouter.post("/", linkingController.addlinking);

export {
    linkingRouter
}