import { connectClient, stopClient } from "../server/db";

async function main() {
  const client = await connectClient();

  await client.collection("books").deleteMany({});

  const resp = await client.collection("books").insertMany([
    {
      id: "nine-tomorrows",
      genre: "Science Fiction",
      title: "Nine Tomorrows",
      author: "Isaac Asimov",
      description: "A Collection of nine short stories by Asimov including his favorite the Ugly Boy",
    },
    {
      id: "foundation-earth",
      genre: "Science Fiction",
      title: "Foundation and Earth",
      author: "Isaac Asimov",
      description: "Fifth novel of the Foundation series and sequel to the trilogy"
    },
    {
      id: "1984",
      genre: "Dystopian Fiction",
      title: "Nineteen Eighty Four",
      author: "George Orwell",
      description: "A Dystopian novel about totalitarianism, survelliance state and repression"
    },
    {
      id: "atlas-shrugged",
      genre: "Philosophical Ficton",
      title: "Atlas Shrugged",
      author: "Ayn Rand",
      description: "Ayn Rand's magnum opus and touching upon objectivism, libertarianism"
    },
    {
      id: "grapes-wrath",
      genre: "Historical Ficton",
      title: "The Grapes of Wrath",
      author: "John Steinbeck",
      description: "A realist novel set during the great depression"
    }
  ]);

  console.info("Inserted Books:", resp.insertedCount);

  stopClient();
}

main();
