import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();
const client = new MongoClient(process.env.ATLAS_URI);
export const database = client.db("taboo_cards");
