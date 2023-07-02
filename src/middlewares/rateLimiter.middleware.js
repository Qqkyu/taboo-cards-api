import rateLimit from "express-rate-limit";
import { DAY_IN_MILLISECONDS } from "#constants/time.constants.js";

const MAX_REQUESTS = 10000;

export const rateLimiter = rateLimit({
  windowMs: DAY_IN_MILLISECONDS,
  max: MAX_REQUESTS,
  message: `You have exceeded the ${MAX_REQUESTS} requests in 24 hours limit!`,
  standardHeaders: true,
  legacyHeaders: false,
});
