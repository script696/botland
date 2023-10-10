import { Bot } from 'shared/types/bot.typedef';

/* Класс выполняет запросы к стороннему апи */
export class ServerHttpClientProvider {
  async fetchBots() {
    try {
      const res = await fetch('http://localhost:5000/api/bot/get-all');
      const data: Array<Bot> = await res.json();

      const mappedData = data.map(({ name, token, appUrl }) => ({
        name,
        token,
        appUrl,
      }));

      return mappedData;
    } catch (err) {
      console.log(err);
    }
  }
}

export const serverHttpClient = new ServerHttpClientProvider();
