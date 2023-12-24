import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
async function connect() {
  const mongodb = await MongoMemoryServer.create();
//   const password = encodeURIComponent("adityakumar")
//   const getUri = mongodb.getUri(`mongodb+srv://adi12:${password}@adi-database.xth9owk.mongodb.net/?retryWrites=true&w=majority`);
  const getUri = mongodb.getUri("mongodb://localhost:27017")
  mongoose.set("strictQuery", true);
  const db = await mongoose.connect(getUri);
  console.log("Database Connected");
  return db;
}
export default connect;
