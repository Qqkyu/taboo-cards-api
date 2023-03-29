import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

async function main() {
  const client = new MongoClient(process.env.ATLAS_URI);

  try {
    const database = client.db("sample_mflix");
    const movies = database.collection("movies");
    // Query for a movie that has the title 'Back to the Future'
    const query = { title: "Back to the Future" };
    const movie = await movies.findOne(query);
    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

main().catch(console.error);
