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
    .addField("Twórca Vextie", "Nastti#5705")
    .addField("Developer", "-")
    .addField("Global Support", "-")
    .setFooter("Vextie by Nastti#5705")
    message.channel.send(embed);
  }

}



module.exports = Admins;
