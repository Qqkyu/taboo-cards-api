import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

export async function getTabooCards() {
  const client = new MongoClient(process.env.ATLAS_URI);

  try {
    const database = client.db("taboo_cards");
    const cards = await database.collection("cards").find({}).toArray();
    return cards;
  } finally {
    // Ensures that the client will close on finish/error
    await client.close();
    return [];
  }
}
