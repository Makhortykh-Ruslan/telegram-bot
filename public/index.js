"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: './config.env' });
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new node_telegram_bot_api_1.default(token, { polling: true });
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
        bot.sendMessage(chatId, 'Всім првиіт, я телеграм бот якого створив Руслан)');
    }
    if ((text === null || text === void 0 ? void 0 : text.toLowerCase()) === 'привіт') {
        bot.sendMessage(chatId, 'Іді нахуй!');
        return;
    }
    if ((text === null || text === void 0 ? void 0 : text.toLowerCase()) !== 'привіт') {
        bot.sendMessage(chatId, 'Я поки більше нічого невмію))');
    }
});
//# sourceMappingURL=index.js.map