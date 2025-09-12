import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("❌ Please define the MONGODB_URI in .env.local");
}

interface Cached {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// keep connection cached across hot reloads
const globalCache = global as typeof global & { mongoose?: Cached };

const cached: Cached = globalCache.mongoose || { conn: null, promise: null };

export default async function dbConnect(): Promise<Mongoose> {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: "ecommerce_clothing",
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  globalCache.mongoose = cached;

  return cached.conn;
}
