import { CARDS_CACHE_KEY } from "#constants/cache.constants.js";
import { cache } from "#utils/cache.utils.js";
import { getCardWithOneLanguage } from "#utils/card-language.utils.js";
import cards from "../../../data/cards.json" assert { type: "json" };

export const cacheCheck = async (req, res, next) => {
  if (!cache.has(CARDS_CACHE_KEY)) {
    const { enCards, plCards } = cards.reduce(
      (acc, card) => {
        acc.enCards.push(getCardWithOneLanguage(card, "en"));
        acc.plCards.push(getCardWithOneLanguage(card, "pl"));
        return acc;
      },
      { enCards: [], plCards: [] },
    );

    cache.set(CARDS_CACHE_KEY, {
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
