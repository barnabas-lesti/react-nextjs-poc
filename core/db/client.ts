import { MongoClient } from "mongodb";

import { isDevelopmentMode } from "#core/functions";

import { MONGODB_CLIENT_OPTIONS, MONGODB_URI } from "./config";

if (!MONGODB_URI) {
  throw new Error('Missing environment variable: "MONGODB_URI"');
}

let client: MongoClient;

if (isDevelopmentMode()) {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  const globalWithMongo = global as typeof globalThis & {
    _mongoClient?: MongoClient;
  };

  if (!globalWithMongo._mongoClient) {
    globalWithMongo._mongoClient = new MongoClient(MONGODB_URI, MONGODB_CLIENT_OPTIONS);
  }
  client = globalWithMongo._mongoClient;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(MONGODB_URI, MONGODB_CLIENT_OPTIONS);
}

export const db = () => client.db();
