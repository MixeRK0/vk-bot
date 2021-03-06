require('dotenv').config();

const express = require('express');
const VkBot = require('node-vk-bot-api');
const Markup = require('node-vk-bot-api/lib/markup');
const fetch = require('cross-fetch');
const strData = require("./string");

if (!globalThis.fetch) {
    globalThis.fetch = fetch;
}

const token = process.env.TOKEN;

const app = express();
const bot = new VkBot(token);

const menuButtons = Markup
    .keyboard([
        [
            Markup.button('О видео', 'primary'),
            Markup.button('Взносы', 'primary'),
            Markup.button('Сроки', 'primary'),
        ],
        [
            Markup.button('Отзывы', 'primary'),
            Markup.button('Жюри', 'primary'),
            Markup.button('Уровни', 'primary'),
        ],
        [
            Markup.button('Категории', 'primary'),
            Markup.button('Организатор', 'primary'),
        ],
        [
            Markup.button('Заявка', 'positive'),
        ],
    ]);

bot.command(['Начать', 'Start', 'start', '/start'], (ctx) => {
    ctx.reply(strData.defaultAnswer, null, menuButtons);
});

bot.command('О видео', (ctx) => {
    ctx.reply(strData.aboutVideoAnswer + strData.defaultAnswer, null, menuButtons);
});

bot.command('Взносы', (ctx) => {
    ctx.reply(strData.paymentAnswer + strData.defaultAnswer, null, menuButtons);
});

bot.command('Сроки', (ctx) => {
    ctx.reply(strData.dateAnswer + strData.defaultAnswer, null, menuButtons);
});

bot.command('Отзывы', (ctx) => {
    getUserName(ctx).then(userName => {
        ctx.reply(userName + strData.reviewAnswer + strData.defaultAnswer,null, menuButtons);
    })
});

bot.command('Жюри', (ctx) => {
    ctx.reply(strData.juryAnswer + strData.defaultAnswer, null, menuButtons);
});

bot.command('Уровни', (ctx) => {
    ctx.reply(strData.levelAnswer + strData.defaultAnswer, null, menuButtons);
});

bot.command('Категории', (ctx) => {
    ctx.reply(strData.categoryAnswer + strData.defaultAnswer, null, menuButtons);
});

bot.command('Организатор', (ctx) => {
    getUserName(ctx).then(userName => {
        ctx.reply(userName + strData.organizerAnswer + strData.defaultAnswer, null, menuButtons);
    })
});

bot.command('Заявка', (ctx) => {
    ctx.reply(strData.entryAnswer + strData.defaultAnswer, null, menuButtons);
});

bot.startPolling();

app.get('/ping', function (req, res) {
    res.send('OK')
})

app.listen(process.env.PORT);

async function getUserName(ctx) {
    const userId = ctx.message.from_id;
    const url = "https://api.vk.com/method/users.get?user_ids=" + userId + "&fields=bdate&access_token=" + token + "&v=5.131";
    const res = await fetch(url);
    const jsonRes = await res.json();

    return jsonRes.response[0].first_name + ', ';
}