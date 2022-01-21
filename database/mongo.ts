import { MongoClient, config } from "../deps.ts";
import { IUser } from "../interfaces/User.interface.ts";


const configVars = {
    '<username>':config().MONGO_USER,
    '<password>':config().MONGO_PW,
    '<database>':config().MONGO_DB
};

const connectionString = config().MONGO_URI.replace("<username>", config().MONGO_USER).replace("<password>", config().MONGO_PW).replace("<database>", config().MONGO_DB)
const client = new MongoClient();

try {
    await client.connect(connectionString)
    console.log("successfully connected to mongoDB")
} catch(err){
    console.log(err)
}

const db = client.database("betCounter")
const userCollection = db.collection<IUser>("users")

const dbs = await client.listDatabases()

export { userCollection }