import { NextFunction, Request, Response } from "express";
import User from "../models/User.js";
import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import { ERROR_MESSAGE_500, USER_NOT_REGISTERED, PERMISSIONS_MISMATCH, ERROR, OK  } from "../utils/constants.js";

export const generateChatCompletion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { message } = req.body;
  try {
    const user = await User.findById(res.locals.jwtData.id);
    if (!user)
      return res
        .status(401)
        .json({ message: USER_NOT_REGISTERED });
    // 1. grab chats of user
    const chats = user.chats.map(({ role, content }) => ({
      role,
      content,
    })) as ChatCompletionMessageParam[];
    chats.push({ content: message, role: "user" });
    user.chats.push({ content: message, role: "user" });

    // 2. establish connection to openAI API
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

    // 3. send chat to openAI to get latest response
    const chatResponse = await openai.chat.completions.create({
      model: process.env.MODEL_NAME,
      messages: chats,
    });
    user.chats.push(chatResponse.choices[0].message);
    await user.save();
    return res.status(200).json({ chats: user.chats });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: ERROR_MESSAGE_500 });
  }
};

export const sendChatsToUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //user token check
    const user = await User.findById(res.locals.jwtData.id);
    if (!user) {
      return res.status(401).send(USER_NOT_REGISTERED);
    }
    if (user._id.toString() !== res.locals.jwtData.id) {
      return res.status(401).send(PERMISSIONS_MISMATCH);
    }
    return res.status(200).json({ message: OK, chats: user.chats });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ message: ERROR, cause: error.message });
  }
};

export const deleteChats = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //user token check
    const user = await User.findById(res.locals.jwtData.id);
    if (!user) {
      return res.status(401).send(USER_NOT_REGISTERED);
    }
    if (user._id.toString() !== res.locals.jwtData.id) {
      return res.status(401).send(PERMISSIONS_MISMATCH);
    }
    //@ts-ignore
    user.chats = [];
    await user.save();
    return res.status(200).json({ message: OK });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ message: ERROR, cause: error.message });
  }
};
