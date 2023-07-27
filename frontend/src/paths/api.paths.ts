import process from "process";

const IS_DEVELOPMENT = !process.env.NODE_ENV || process.env.NODE_ENV === "development";
export const API_URL_PREFIX = IS_DEVELOPMENT
  ? "http://localhost:7777/api/"
  : "https://www.taboocardsapi.com/api/";

export const CARDS_PATHS = {
  cards: `${API_URL_PREFIX}cards`,
  random: `${API_URL_PREFIX}cards/random`,
};
