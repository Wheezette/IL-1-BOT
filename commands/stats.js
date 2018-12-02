const Discord = require("discord.js");
const Command = require("../base/Command.js");
const { version } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

class Stats extends Command {
  constructor(client) {
    super(client, {
      name: "stats",
      description: "Statystyki bota.",
      usage: "stats",
    });
  }

  async run(message, args, level) { // eslint-disable-line no-unused-vars
    const duration = moment.duration(this.client.uptime).format(" D [dni], H [godz], m [min], s [sek]");
    const embed = new Discord.RichEmbed()
    .setColor("#FA8072")
    .setAuthor("Kelly's Statistics")
    .addField("• Mem Usage:", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)
    .addField("• Uptime:", `${duration}`)
    .addField("• Users:", `${this.client.users.size.toLocaleString()}`)
    .addField("• Servers:", `${this.client.guilds.size.toLocaleString()}`)
    .addField("• Channels:", `${this.client.channels.size.toLocaleString()}`)
    .addField("• Discord.js:", `v${version}`)
    .addField("• Node:", `${process.version}`)
    .setFooter(`©2018-2019 KellyBOT`)
    message.channel.send(embed);
    //message.channel.send(`= STATISTICS =
  //• Mem Usage  :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
  //• Uptime     :: ${duration}
  //• Users      :: ${this.client.users.size.toLocaleString()}
  //• Servers    :: ${this.client.guilds.size.toLocaleString()}
  //• Channels   :: ${this.client.channels.size.toLocaleString()}
  //• Discord.js :: v${version}
  //• Node       :: ${process.version}`, {code: "asciidoc"});
  }
}

module.exports = Stats;
