import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI!);
const db = client.db(process.env.DB_NAME!);

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),
  emailAndPassword: {
    enabled: true
  },
  
  user: {
  additionalFields: {
    role: {
      type: "string",
      defaultValue: "user",
    },
    isBlocked: {
      type: "boolean",
      defaultValue: false,
    },
  },
},

});