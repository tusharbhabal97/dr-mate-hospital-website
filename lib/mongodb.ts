import { MongoClient } from "mongodb";

const rawUri = process.env.MONGODB_URI ?? "";

function normalizeMongoUri(uri: string) {
  return uri.trim().replace(/;$/, "");
}

const uri = normalizeMongoUri(rawUri);

const globalForMongo = globalThis as unknown as {
  _mongoClientPromise?: Promise<MongoClient>;
};

function createMongoClientPromise() {
  if (!uri) {
    throw new Error(
      "MONGODB_URI is missing. Add it to your environment variables.",
    );
  }
  return new MongoClient(uri, {
    maxPoolSize: 10,
    minPoolSize: 1,
  }).connect();
}

export async function getDb() {
  if (!globalForMongo._mongoClientPromise) {
    globalForMongo._mongoClientPromise = createMongoClientPromise();
  }
  const client = await globalForMongo._mongoClientPromise;
  return client.db("drmatehospital");
}
