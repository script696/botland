import { Markup } from 'telegraf';

class TelegrafMarkup {
  getHelloHtml() {
    return `<strong>Привет, Kiy ✌</strong>`;
  }

  getActionButtons(url: string) {
    return Markup.keyboard([Markup.button.webApp('Open Shop', url, false)]);
  }
}

export const telegrafMarkup = new TelegrafMarkup();
