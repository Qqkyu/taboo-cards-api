import { Router } from "express";
import { cardControllers } from "./card.controllers.js";

const router = Router();

router.route("/").get(cardControllers.getMany);

export default router;
