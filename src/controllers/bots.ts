import { Bot } from 'shared/types/bot.typedef';
import { botProvider } from 'providers/BotProvider';
import { Request } from 'express';

export class BotController {
  static addBot = async (req: Request<Bot>, res) => {
    botProvider.startBot(req.body);

    res.send({
      message: 'success',
    });
  };
}
