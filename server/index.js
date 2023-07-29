import express from "express";
import config from "#config/index.js";
import cardRouter from "#resources/card/card.router.js";
import { rateLimiter } from "#middlewares/rateLimiter.middleware.js";
import { cacheCheck } from "#middlewares/cache.middleware.js";
import { languageCheck } from "#middlewares/language.middleware.js";
import { fileURLToPath } from "url";
import path from "path";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const api = express();

api.use(
  cors({
    origin: "https://taboocardsapi.com",
    methods: ["GET"],
    allowedHeaders: ["Content-Type"],
    maxAge: 600,
  }),
);
api.use(express.json());
api.use(express.urlencoded({ extended: false }));

api.use(express.static(path.join(__dirname, "../dist")));

api.use(rateLimiter);
api.use(cacheCheck);
api.use(languageCheck);

api.use("/", (req, res, next) => next());
api.use("/api/cards", cardRouter);

api.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

try {
  api.listen(config.port, () => {
    console.log(`Server is running at port: ${config.port}`);
  });
} catch (e) {
  console.error(e);
}
