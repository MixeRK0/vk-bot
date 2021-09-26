const express = require('express');
const bodyParser = require('body-parser');
const VkBot = require('node-vk-bot-api');

const app = express();
const bot = new VkBot('983f0a47fb46b4f66f02b0c2d8496de90f591921a2e9b1e77c05d36e8f5d1dbf82361d21ac835ee9219b4');

// bot.on((ctx) => {
//     ctx.reply('Hello!');
// });

bot.command('Тест', (ctx) => {
    ctx.reply('Бот работает');
});

// app.use(bodyParser.json());

// app.post('/', bot.webhookCallback);
bot.startPolling();
app.listen(process.env.PORT);

// const express = require('express')
// const path = require('path')
// const PORT = process.env.PORT || 5000
// const VkBot = require('node-vk-bot-api');
//
// const bot = new VkBot('983f0a47fb46b4f66f02b0c2d8496de90f591921a2e9b1e77c05d36e8f5d1dbf82361d21ac835ee9219b4');
//
// console.log('qwe');
// // bot.command('/start', (ctx) => {
// //     ctx.reply('Hello!');
// // });
// bot.command('Начать', (ctx) => {
//     ctx.reply('Hello!');
// });
// bot.command('Тест', (ctx) => {
//     ctx.reply('Бот работает');
// });
//
// bot.startPolling();

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))
