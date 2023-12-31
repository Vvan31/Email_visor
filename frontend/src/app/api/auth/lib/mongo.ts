import { MongoClient } from "mongodb";

declare const global: {
  _mongoClientPromise?: Promise<MongoClient>;
};

if(!process.env.MONGODB_URI){
  throw new Error("Please define theEMAILS_DB_URI environment variable inside .env.local");
}

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise: Promise<MongoClient>;

if(process.env.NODE_ENV === "development"){
      // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;