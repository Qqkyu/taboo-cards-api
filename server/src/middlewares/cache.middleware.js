import { cache } from "#utils/cache.utils.js";
import { CARDS_COLLECTION_NAME } from "#constants/db.constants.js";
import { database } from "#database/db.js";
import { getCardWithOneLanguage } from "#utils/card-language.utils.js";

export const cacheCheck = async (req, res, next) => {
  if (!cache.has(CARDS_COLLECTION_NAME)) {
    const cards = await database
      .collection(CARDS_COLLECTION_NAME)
      .find({}, { projection: { _id: 0 } })
      .toArray();

    const { enCards, plCards } = cards.reduce(
      (acc, card) => {
        acc.enCards.push(getCardWithOneLanguage(card, "en"));
        acc.plCards.push(getCardWithOneLanguage(card, "pl"));
        return acc;
      },
      { enCards: [], plCards: [] },
    );

    cache.set(CARDS_COLLECTION_NAME, {
      en: {
        easy: enCards.filter((card) => card.difficulty === "easy"),
        medium: enCards.filter((card) => card.difficulty === "medium"),
        hard: enCards.filter((card) => card.difficulty === "hard"),
        all: enCards,
      },
      pl: {
        easy: plCards.filter((card) => card.difficulty === "easy"),
        medium: plCards.filter((card) => card.difficulty === "medium"),
        hard: plCards.filter((card) => card.difficulty === "hard"),
        all: plCards,
      },
    });
  }
  next();
};
