import { connect, disconnect } from "mongoose";
import { MONGO_NO_CONNECT, MONGO_NO_DISCONNECT } from "../utils/constants.js";
async function connectToDatabase() {
  try {
    await connect(process.env.MONGODB_URL);
  } catch (error) {
    console.log(error);
    throw new Error(MONGO_NO_CONNECT);
  }
}

async function disconnectFromDatabase() {
  try {
    await disconnect();
  } catch (error) {
    console.log(error);
    throw new Error(MONGO_NO_DISCONNECT);
  }
}

export { connectToDatabase, disconnectFromDatabase };
