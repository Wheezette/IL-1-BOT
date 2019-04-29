const Command = require("../base/Command.js");
const Discord = require("discord.js");

class Admini extends Command {
  constructor(client) {
    super(client, {
      name: "admini",
      description: "Wyswietla administracje serwera PortalCraft.pl.",
      usage: "ping",
      aliases: ["administracja"]
    });
  }

  async run(message, args, level) { // eslint-disable-line no-unused-vars
    const embed = new Discord.RichEmbed()
    .setAuthor("Administracja")
    .setDescription("Pełna lista administracji całego serwera minecraft PortalCraft.pl
    .addField("Właściciele serwera", "Hatmes\nTheFacker")
    .addField("Techniczka", "SweetUnicorn_")
    .addField("HeadAdmin", "*brak*")
    .addField("Admini", "*brak*")
    .addField("JrAdmini", "*brak*")
    .addField("Moderatorzy", "*brak*")
    .addField("KidModeratorzy", "*brak*")
    .addField("Budowniczy", "*brak*")
    .addField("Helperzy", "*brak*")
    .setFooter("PortalCraft.pl 2019")
    message.channel.send(embed);
  }

}



module.exports = Admini;
