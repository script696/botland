import express from "express";
import {Composer, Telegraf} from 'telegraf'

import mongoose from "mongoose";

import {router} from "./routes/index.js";
import BotModel from "./models/bots.js";

const { PORT = 8080 } = process.env;
const app = express();

mongoose.connect("mongodb://localhost:27017/botland", {
  useNewUrlParser: true,

});

app.use("/", router);

app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode).send({ message: statusCode === 500 ? "На сервере произошла ошибка" : message });
  next();
});

const bots = await BotModel.find();

const composer = new Composer()
composer.command("start", Telegraf.reply("Hello world!"))


export const updateBots = (bots) => {
  for (const {token} of bots) {
    const bot = new Telegraf(token)
    bot.use(composer)
    bot.startPolling()
  }
}

updateBots(bots)

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
