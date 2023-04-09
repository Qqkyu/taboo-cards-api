import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import { DATABASE_NAME } from "./constants/db.constants";

dotenv.config();
const client = new MongoClient(process.env.ATLAS_URI);
export const database = client.db(DATABASE_NAME);
