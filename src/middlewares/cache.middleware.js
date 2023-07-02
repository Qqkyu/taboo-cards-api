import { cache } from "../utils/cache.utils.js";
import { CARDS_COLLECTION_NAME } from "../constants/db.constants.js";
import { database } from "../db.js";

export const cacheCheck = async (req, res, next) => {
  if (!cache.has(CARDS_COLLECTION_NAME)) {
    const cards = await database
      .collection(CARDS_COLLECTION_NAME)
      .find({}, { projection: { _id: 0 } })
      .toArray();
    cache.set(CARDS_COLLECTION_NAME, cards);
  }
  next();
};
