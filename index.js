// Requirements
const Discord = require("discord.js");
const client = new Discord.Client();
const chalk = require('chalk');
const config = require('./cfg/config.json')
const fs = require("fs");
const Enmap = require("enmap");
var request = require("request");
const moment = require("moment");
const db = require('quick.db');
client.commands = new Enmap();
client.config = config;
const ayarlar = require('./ayarlar.json');
const jsonfile = require("jsonfile");
const file = "./cfg/config.json";
// Update Check
        var takim1 = jsonfile.readFileSync(file).takim1;

const express = require('express');
const http = require('http');
const app = express();
  app.get("/", (request, response) => {
  console.log(Date.now() + "7/24 AKTİF TUTMA İŞLEMİ BAŞARILI");
  response.sendStatus(200);
});
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 30000);
  app.get("/", (request, response) => {
  console.log(Date.now() + "7/24 AKTİF TUTMA İŞLEMİ BAŞARILI");
  response.sendStatus(200);
});
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 30000);
  app.get("/", (request, response) => {
  console.log(Date.now() + "7/24 AKTİF TUTMA İŞLEMİ BAŞARILI");
  response.sendStatus(200);
});
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 30000);
  app.get("/", (request, response) => {
  console.log(Date.now() + "7/24 AKTİF TUTMA İŞLEMİ BAŞARILI");
  response.sendStatus(200);
});
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 30000);
  app.get("/", (request, response) => {
  console.log(Date.now() + "7/24 AKTİF TUTMA İŞLEMİ BAŞARILI");
  response.sendStatus(200);
});
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 30000);
  app.get("/", (request, response) => {
  console.log(Date.now() + "7/24 AKTİF TUTMA İŞLEMİ BAŞARILI");
  response.sendStatus(200);
});
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 30000);

// Check if version matches request.

  // We listen for client's ready event.
  client.on("ready", () => {
    console.log(chalk.blue(`${client.user.username} is ready. (${client.guilds.cache.size} Guilds) | Prefix: ${ayarlar.prefix}`));
     client.user.setActivity(`Mert ☾`, { type: 'PLAYING' });
      //  client.user.setActivity(`Hazırlanıyor abiler, ablalar hazır olun 🔥`, { type: 'PLAYING' });

    // client.user.setActivity(`Loading...  %80 Completed`, { type: 'PLAYING' });
  });

  // Load Express Webserver
  fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      const event = require(`./events/${file}`);
      let eventName = file.split(".")[0];
      client.on(eventName, event.bind(null, client));
    });
  });

  // Commands Load
  client.commands = new Enmap();
  fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    console.log(chalk.magenta("Loading Commands..."))
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      let props = require(`./commands/${file}`);
      let commandName = file.split(".")[0];
      console.log(chalk.green(`[+] ${commandName}`));
      client.commands.set(commandName, props);
    });
  });

  // Login our BOT
  client.login(process.env.token);


// Versions do not match (exit)




