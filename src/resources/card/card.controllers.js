import { database } from "../../db.js";
import { getRandomInt } from "../../utils/random.js";

let TABOO_CARDS_CACHE = undefined;

const getMany = async (req, res) => {
  try {
    if (!TABOO_CARDS_CACHE) {
      TABOO_CARDS_CACHE = await database.collection("cards").find({}).toArray();
    }
    res.status(200).json({ data: TABOO_CARDS_CACHE });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

const getRandom = async (req, res) => {
  try {
    if (!TABOO_CARDS_CACHE) {
      TABOO_CARDS_CACHE = await database.collection("cards").find({}).toArray();
    }
    const randomTabooCardIdx = getRandomInt(0, TABOO_CARDS_CACHE.length);
    res.status(200).json({ data: TABOO_CARDS_CACHE[randomTabooCardIdx] });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const cardControllers = {
  getMany,
  getRandom,
};
