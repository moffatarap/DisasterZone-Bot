/* DISASTER ZONE TELEGRAM CHATBOT NODE.js moffatarap */
//FRAMEWORKS
const Telegraf = require('telegraf') // import telegraf framework
var request = require('request'); //uses request API for getting JSON
var $ = require('jQuery');
const jsdom = require("jsdom");
require('dotenv').config() //Allows for the use of bot token in a env file

//VAR
var geonetVolcano = "https://api.geonet.org.nz/volcano/val"; //saves goenet url as var
var geonetVolcanoDataJSON;
var volcanoDataDisplay; 
const bot = new Telegraf(process.env.BOT_TOKEN) //bot token in .env file
const trigger = 'volcano';

//ARRAY
var volcanoMarkerTitleArray;
var volcanoLevelArray;
var volcanoActivityArray;
var volcanoHazardsArray;
var volcanonLatArray;
var volcanonLngArray;


/* Geonet Data Get */
function GeonetDataVol() {
    console.log('GeonetDatVol_Called');
   /* $.getJSON(geonetVolcano, function (data) {
        $.each(data.features, function (i, vol) {
             //data id displayed in table row || this one is volcano title
             if (i < volTitleLength) {
                 volcanoMarkerTitleArray[i] = vol.properties.volcanoTitle;
                 volcanoLevelArray[i] = vol.properties.level;
                 volcanoActivityArray[i] = vol.properties.activity;
                 volcanoHazardsArray[i] = vol.properties.hazards;
                 volcanonLatArray[i] = vol.geometry.coordinates[1]; //access first element
                 volcanonLngArray[i] = vol.geometry.coordinates[0]; //access second element
                 i++;
             }
             else {
                 
             }
         });
 }); */
}


bot.start((ctx) => ctx.reply('Welcome to Disaster Zone Chatbot! I report on earthquakes around New Zealand.'))
/* Varable sent via the return function */
//if message = earthquake then run return function

bot.hears(trigger, (ctx) => {
GeonetDataVol();
console.log('VOLCANO');
return ctx.reply(`${geonetVolcanoDataJSON}`)

})

bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()