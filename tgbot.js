require('dotenv').config()
const { Telegraf, Markup } = require('telegraf');

const bot = new Telegraf(process.env.API_TELEGRAM_BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply(
    `Welcome to the MegatonProbot!`,
    Markup.inlineKeyboard([Markup.button.webApp("Play", "https://www.google.com")])
  );
});

bot.launch().catch((error) => {
  console.error("Failed to launch the bot:", error)
});

console.log("Bot is set up and running.");

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));