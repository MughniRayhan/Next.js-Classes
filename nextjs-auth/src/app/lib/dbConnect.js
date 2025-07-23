import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version

function dbConnect(collectionName) {
  const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
  return client.db(process.env.DB_NAME ).collection(collectionName);
}

export default dbConnect;