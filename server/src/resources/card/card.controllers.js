import { DEFAULT_CARD_LANGUAGE } from "#utils/card-language.utils.js";
import { getRandomInt } from "#utils/random.utils.js";
import { cache } from "#utils/cache.utils.js";
import { CARDS_CACHE_KEY } from "#constants/cache.constants.js";

const getMany = async (req, res) => {
  try {
    const cards =
      cache.get(CARDS_CACHE_KEY)[req.query.language ?? DEFAULT_CARD_LANGUAGE][req.query.difficulty ?? "all"];
    res.status(200).json({ data: cards });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

const getRandom = async (req, res) => {
  try {
    const cards =
      cache.get(CARDS_CACHE_KEY)[req.query.language ?? DEFAULT_CARD_LANGUAGE][req.query.difficulty ?? "all"];
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
