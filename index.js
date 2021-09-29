const express = require('express');
const bodyParser = require('body-parser');
const VkBot = require('node-vk-bot-api');

const app = express();
const bot = new VkBot('983f0a47fb46b4f66f02b0c2d8496de90f591921a2e9b1e77c05d36e8f5d1dbf82361d21ac835ee9219b4');

bot.command('Тест', (ctx) => {
    ctx.reply('Бот работает');
});

bot.startPolling();
app.listen(process.env.PORT);
