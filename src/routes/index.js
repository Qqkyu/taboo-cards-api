import express from "express";
import { appRoute } from "./app.route.js";

export const routes = express.Router();

routes.use(appRoute);
