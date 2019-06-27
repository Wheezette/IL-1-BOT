const Discord = require("discord.js");
const Command = require("../base/Command.js");
const { version } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

class BotInfo extends Command {
  constructor(client) {
    super(client, {
      name: "botinfo",
      description: "Informacje o bocie.",
      usage: "botinfo",
    });
  }

  async run(message, args, level) { // eslint-disable-line no-unused-vars
    const duration = moment.duration(this.client.uptime).format(" D [dni], H [godz], m [min], s [sek]");
    const embed = new Discord.RichEmbed()
    .setColor("#FA8072")
    .setAuthor("Informacje o bocie GraficznyBot")
    .addField("• Użycie Pamięci:", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)
    .addField("• Czas Pracy:", `${duration}`)
    .addField("• Użytkownicy:", `${this.client.users.size.toLocaleString()}`)
    .addField("• Serwery:", `${this.client.guilds.size.toLocaleString()}`)
    .addField("• Kanały:", `${this.client.channels.size.toLocaleString()}`)
    .addField("• Node:", `${process.version}`)
    .addField("• Bot stworzony przez", `IceLeaders CEO (${client.users.get("591681694218846255").tag})`)
    .setFooter(`2019 GraficznyBot`)
    message.channel.send(embed);
  }
}

module.exports = BotInfo;
