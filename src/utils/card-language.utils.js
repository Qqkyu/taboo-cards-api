export const DEFAULT_CARD_LANGUAGE = "en";

export function getCardWithOneLanguage(card, language = DEFAULT_CARD_LANGUAGE) {
  return {
    forbiddenWords: card.forbiddenWords[language],
    title: card.title[language],
    difficulty: card.difficulty,
  };
}
