import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
async function connect() {
  const mongodb = await MongoMemoryServer.create();

  mongoose.set("strictQuery", true);
  const db = await mongoose.connect('mongodb://localhost:27017');

  console.log("Database Connected");
  return db;
}
export default connect;
