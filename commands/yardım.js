const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
              if(!message.member.roles.cache.has("908450382517264505")) return message.channel.send('Yetkin yok')

const embed = new Discord.MessageEmbed()
.setTitle("__Poseidon Media Group__ Bot Komutları")
.addField("**\<a:bit:904449367900057682> !embed**","Embed Komutları Yardım Menüsü")
.addField("**\<a:AyarGif:904448819159269387> !moderasyon**","Moderasyon Komutları Yardım Menüsü")
.addField("**\<a:SabitGif:904448858703134790> !tablo**","Çıkartabileceğiniz Tabloları Listeler")
.addField("**\<a:krmzyldz:904449352439853096> !check**","Check Açıp-Kapatma İçin Yardım Menüsü")
.setThumbnail(`https://cdn.discordapp.com/attachments/893461231980146709/908446048660361226/SPOILER_image0.png`)
.setFooter(`Poseidon Media Group`)
.setColor("#57a9d1")
message.channel.send(embed);
};

exports.conf = { 
  enabled: true,
  guildOnly: false,
  aliases: ["yardım"]
};

exports.help = {
  name: "yardım"
};
