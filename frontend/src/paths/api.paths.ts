import process from "process";

const IS_DEVELOPMENT = !process.env.NODE_ENV || process.env.NODE_ENV;

export const LOCALHOST_API_URL_PREFIX = "http://localhost:10000/api/";
export const WEB_API_URL_PREFIX = IS_DEVELOPMENT ? "https://taboocardsapi.com/api/" : LOCALHOST_API_URL_PREFIX;

export const CARDS_PATHS = {
  localhost: {
    cards: `${LOCALHOST_API_URL_PREFIX}cards`,
    random: `${LOCALHOST_API_URL_PREFIX}cards/random`,
  },
  web: {
    cards: `${WEB_API_URL_PREFIX}cards`,
    random: `${WEB_API_URL_PREFIX}cards/random`,
  },
};
