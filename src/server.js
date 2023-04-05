import express from "express";
import config from "./config/index.js";
import cardRouter from "./resources/card/card.router.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", (req, res, next) => next());
app.use("/api/card", cardRouter);

export const start = async () => {
  try {
    app.listen(config.port, () => {
      console.log(
        `⚡️[server]: Server is running at http://localhost:${config.port}`
      );
    });
  } catch (e) {
    console.error(e);
  }
};
