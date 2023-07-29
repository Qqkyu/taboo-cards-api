import process from "process";

const IS_DEVELOPMENT = !process.env.NODE_ENV || process.env.NODE_ENV;
export const API_URL_PREFIX = IS_DEVELOPMENT ? "http://localhost:10000/api/" : "/api/";

export const CARDS_PATHS = {
  cards: `${API_URL_PREFIX}cards`,
  random: `${API_URL_PREFIX}cards/random`,
};
