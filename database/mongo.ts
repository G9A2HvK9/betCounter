import { MongoClient, config } from "../deps.ts";

const client = new MongoClient();

const connectionString = config().MONGO_URI.replace("<password>", config().MONGO_PW);

const db = await client.connect(connectionString)

export { db }