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

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "../public")));

app.use(rateLimiter);
app.use(cacheCheck);
app.use(languageCheck);

app.use("/", (req, res, next) => next());
app.use("/api/cards", cardRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

try {
  app.listen(config.port, () => {
    console.log(`Server is running at port: ${config.port}`);
  });
} catch (e) {
  console.error(e);
}
