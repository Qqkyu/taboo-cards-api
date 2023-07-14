import { CARDS_COLLECTION_NAME } from "#constants/db.constants.js";
import { DEFAULT_CARD_LANGUAGE } from "#utils/card-language.utils.js";
import { getRandomInt } from "#utils/random.utils.js";
import { cache } from "#utils/cache.utils.js";

const getMany = async (req, res) => {
  try {
    const cards = cache.get(CARDS_COLLECTION_NAME)[req.query.language ?? DEFAULT_CARD_LANGUAGE];
    res.status(200).json({ data: cards });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

const getRandom = async (req, res) => {
  try {
    const cards = cache.get(CARDS_COLLECTION_NAME)[req.query.language ?? DEFAULT_CARD_LANGUAGE];
    const randomTabooCardIdx = getRandomInt(0, cards.length);
    const randomTabooCard = cards[randomTabooCardIdx];

    res.status(200).json({ data: randomTabooCard });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const cardControllers = {
  getMany,
  getRandom,
};
