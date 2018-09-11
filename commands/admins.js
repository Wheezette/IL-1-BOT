const Command = require("../base/Command.js");
const Discord = require("discord.js");

class Admins extends Command {
  constructor(client) {
    super(client, {
      name: "admins",
      description: "Wyswietla administracje bota.",
      usage: "ping",
      aliases: ["globalsupport"]
    });
  }

  async run(message, args, level) { // eslint-disable-line no-unused-vars
    const embed = new Discord.RichEmbed()
    .setAuthor("Administracja bota")
    .addField("Developer", "xCookieTM#9613")
    .addField("Vice Developer", "rkubaplYT#6360")
    .addField("Global Support", "*Brak uzytkownikow w tej kategorii*")
    message.channel.send(embed);
  }

}



module.exports = Admins;
