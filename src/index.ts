import dotenv from 'dotenv';
dotenv.config({ path: './config.env' });

import TelegramBot from 'node-telegram-bot-api';

const token = process.env.TELEGRAM_BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, msg => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Привіт це Бот якого створив Руслан!');
});

bot.on('message', msg => {
  const chatId = msg.chat.id;
  const chatType = msg.chat.type;
  const text = msg.text;

  if (!text) {
    return;
  }

  if (chatType === 'group' || chatType === 'supergroup') {
    bot.sendMessage(
      chatId,
      'Всім првиіт, я телеграм бот якого створив Руслан)'
    );
  }

  if (text?.toLowerCase() === 'привіт') {
    bot.sendMessage(chatId, 'Іді нахуй!');

    return;
  }

  if (text?.toLowerCase() !== 'привіт') {
    bot.sendMessage(chatId, 'Я поки більше нічого невмію))');
  }
});