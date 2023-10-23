export const WEB_API_URL_PREFIX = "https://www.taboocardsapi.com/api/";
export const LOCALHOST_API_URL_PREFIX = "http://localhost:10000/api/";
export const API_URL_PREFIX = import.meta.env.DEV ? LOCALHOST_API_URL_PREFIX : "/api/";

export const CARDS_PATHS = {
  cards: `cards`,
  random: `cards/random`,
};
