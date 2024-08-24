import mongoose from "mongoose";
import { randomUUID } from "crypto";
const chatSchema = new mongoose.Schema({
  id: {
    type: String,
    default: randomUUID(),
  },
  role: { // ASSISTANT or USER
    type: String,
    required: true,
  },
  content: { // specific message
    type: String,
    required: true,
  },
});
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  chats: [chatSchema], // some users may not have chat, hence not a required field
});

export default mongoose.model("User", userSchema);
