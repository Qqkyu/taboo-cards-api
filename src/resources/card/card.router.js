import { Router } from "express";
import { cardControllers } from "./card.controllers.js";

const router = Router();

router.route("/").get(cardControllers.getMany);
router.route("/random").get(cardControllers.getRandom);

export default router;
