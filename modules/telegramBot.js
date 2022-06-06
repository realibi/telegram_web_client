const TelegramBot = require('node-telegram-bot-api');
const models = require('../Models');
const token = '5594344103:AAEsjXT-pMoR6MbHQADSrej1gAYcnf1SPkQ';
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/register/, async (msg) => {
    let fullName = msg.from.first_name;
    let chatId = msg.chat.id;

    let newUser = new models.User({fullName, chatId});
    await newUser.save();

    bot.sendMessage(msg.chat.id, "Вы успешно зарегистрированы!");
});
