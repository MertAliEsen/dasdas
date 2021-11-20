// Requirements
const chalk = require("chalk");
const fs = require("fs");
const dateformat = require("dateformat");
const express = require("express");
var bodyParser = require("body-parser");
const json = require("json-update");
const jsonfile = require("jsonfile");
const file = "./cfg/config.json";
const file2 = "./cfg/config2.json";
const file3 = "./cfg/config3.json";
const file4 = "./cfg/check.json";
const filep = "./cfg/plugins.json";

var favicon = require("serve-favicon");
const request = require("request");

// Express Load
const app = express();
const port = 3000;

module.exports = client => {
  app.set("view engine", "ejs");
  app.use(favicon("./views/ico.png"));
  app.use(express.static("./public"));

  var urlencodedParser = bodyParser.urlencoded({ extended: false });

  // Dashboard Page
  app.get("/", function(req, res) {
    
   
    var info = [
      { name: "Username", desc: `${client.user.username}` },
      { name: "Server Count", desc: `${client.guilds.cache.size}` },
      {
        name: "Creation Date",
        desc: dateformat(
          `${client.user.createdAt}`,
          "dddd, mmmm dS, yyyy, h:MM TT"
        )
      }
    ];
    var username = client.user.username;
    var av = client.user.avatarURL();
    var pagetitle = "Scrim Bot Ana Sayfa";
    res.render("pages/index", {
      info: info,
      username: username,
      av: av,
      pagetitle: pagetitle
    });
  });

 

 

  // Dashboard running
  app.listen(port, () => {
    console.log(chalk.green(`Dashboard running at http://localhost:${port}`));
  });
};
