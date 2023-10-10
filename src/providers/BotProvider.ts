import { Composer, Context, Telegraf } from 'telegraf';
import { Update } from 'telegraf/typings/core/types/typegram';
import { telegrafMarkup } from 'shared/markup/TelegrafMarkup';
import { Bot } from 'shared/types/bot.typedef';

export class BotProvider {
  composer: Composer<Context<Update>>;

  constructor() {
    this.composer = new Composer();
  }

  startBot({ token, appUrl }: Bot) {
    const bot = new Telegraf(token);

    bot.use(this.composer);
    bot.command('start', (ctx) => {
      ctx.replyWithHTML(
        telegrafMarkup.getHelloHtml(),
        telegrafMarkup.getActionButtons(appUrl),
      );
    });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    bot.startPolling();
  }

  startAllBots(bots: Array<Bot>) {
    for (const bot of bots) {
      this.startBot(bot);
    }
  }
}

export const botProvider = new BotProvider();
