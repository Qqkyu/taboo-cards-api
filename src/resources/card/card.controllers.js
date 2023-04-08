import { CARDS_COLLECTION_NAME } from "../../constants/db.constants.js";
import { database } from "../../db.js";
import { cache } from "../../utils/cache.js";
import { getRandomInt } from "../../utils/random.js";

const getMany = async (req, res) => {
  try {
    if (!cache.has(CARDS_COLLECTION_NAME)) {
      const cards = await database
        .collection(CARDS_COLLECTION_NAME)
        .find({})
        .toArray();
      cache.set(CARDS_COLLECTION_NAME, cards);
    }
    const cards = cache.get(CARDS_COLLECTION_NAME);
    res.status(200).json({ data: cards });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

const getRandom = async (req, res) => {
  try {
    if (!cache.has(CARDS_COLLECTION_NAME)) {
      const cards = await database
        .collection(CARDS_COLLECTION_NAME)
        .find({})
        .toArray();
      cache.set(CARDS_COLLECTION_NAME, cards);
    }
    const cards = cache.get(CARDS_COLLECTION_NAME);
    const randomTabooCardIdx = getRandomInt(0, cards.length);
    res.status(200).json({ data: cards[randomTabooCardIdx] });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const cardControllers = {
  getMany,
  getRandom,
};
