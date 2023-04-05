import { database } from "../../db.js";

let TABOO_CARDS_CACHE = undefined;

const getMany = async (req, res) => {
  try {
    if (TABOO_CARDS_CACHE) {
      res.status(200).json({ data: TABOO_CARDS_CACHE });
    }

    const cards = await database.collection("cards").find({}).toArray();
    TABOO_CARDS_CACHE = cards;

    res.status(200).json({ data: cards });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const cardControllers = {
  getMany,
};
