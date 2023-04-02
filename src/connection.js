import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();
const client = new MongoClient(process.env.ATLAS_URI);

const TABOO_CARDS_CACHE = undefined;

export async function getTabooCards() {
  if (TABOO_CARDS_CACHE) {
    return TABOO_CARDS_CACHE;
  }

  try {
    const database = client.db("taboo_cards");
    const cards = await database.collection("cards").find({}).toArray();
    TABOO_CARDS_CACHE = cards;
    return cards;
  } finally {
    // Ensures that the client will close on finish/error
    await client.close();
    return [];
  }
}
