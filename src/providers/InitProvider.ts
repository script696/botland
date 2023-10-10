import { Bot } from 'shared/types/bot.typedef';
import {
  ServerHttpClientProvider,
  serverHttpClient,
} from 'providers/ServerHttpClientProvider';
import { botProvider, BotProvider } from 'providers/BotProvider';

/**
 * Класс инициализирует работу сервера
 */

class InitProvider {
  bots: Array<Bot>;
  serverHttpClientProvider: ServerHttpClientProvider;
  botProvider: BotProvider;
  constructor() {
    this.serverHttpClientProvider = serverHttpClient;
    this.botProvider = botProvider;
  }

  /* Метод запрашивает массив ботов со стороннего апи и запускает их */
  async initServer() {
    this.bots = await this.serverHttpClientProvider.fetchBots();

    this.botProvider.startAllBots(this.bots);
  }
}

export const initProvider = new InitProvider();
