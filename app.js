/* DISASTER ZONE TELEGRAM CHATBOT NODE.js moffatarap */
//FRAMEWORKS
const Telegraf = require('telegraf') // import telegraf framework
var request = require('request'); //uses request API for getting JSON
require('dotenv').config() //Allows for the use of bot token in a env file

//VAR
var geonetVolcano = "https://api.geonet.org.nz/volcano/val"; //saves goenet url as var
const bot = new Telegraf(process.env.BOT_TOKEN) //bot token in .env file
const trigger = 'volcano';


/* Geonet Data Get */
function GeonetDataVol() {
    console.log('test');
}


bot.start((ctx) => ctx.reply('Welcome to Disaster Zone Chatbot! I report on earthquakes around New Zealand.'))
/* Varable sent via the return function */
//if message = earthquake then run return function

bot.hears(trigger, (ctx) => {
GeonetDataVol();
console.log('VOLCANO');
return ctx.reply(`${geonetVolcano}`)

})

bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()