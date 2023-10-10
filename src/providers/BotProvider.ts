import BotModel, { Bot } from '../models/bots';
import { Model } from 'mongoose';
import { Composer, Context, Telegraf } from 'telegraf';
import { Update } from 'telegraf/typings/core/types/typegram';

export class BotProvider {
  botModel: Model<Bot>;
  composer: Composer<Context<Update>>;

  constructor() {
    this.botModel = BotModel;
    this.composer = new Composer();
    this.composer.command('start', Telegraf.reply('Hello world!'));
  }

  startBot;

  startAllBots(bots: Array<Bot>) {
    for (const { token } of bots) {
      const bot = new Telegraf(token);
      bot.use(this.composer);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      bot.startPolling();
    }
  }
}

export const botProvider = new BotProvider();
