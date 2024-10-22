import { type MongoClientOptions } from "mongodb";

export const { MONGODB_URI } = process.env;

export const MONGODB_CLIENT_OPTIONS: MongoClientOptions = {};
