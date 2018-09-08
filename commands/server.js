const Discord = require("discord.js");
const Command = require("../base/Command.js");
const moment = require("moment");

class Serverinfo extends Command {
  constructor(client) {
    super(client, {
      name: "serverinfo",
      description: "Wyświetli informaje o serwerze.",
      usage: "serverinfo",
      aliases: ["serverinfo"]
    });
  }

  async run(message, args, level) { // eslint-disable-line no-unused-vars
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setColor("FFA07A")
    .setAuthor(`${message.guild.name}`, `https://cdn.discordapp.com/emojis/473897310414176266.png?v=1`)
    .setThumbnail(sicon)
    //.addField("Name:", message.guild.name)
    .addField("Utworzony:", `${moment.utc(message.guild.createdAt).format('dd, Do MM YYYY')}`)
    .addField("Dołączyłeś(aś):",`${moment.utc(message.author.joinedAt).format('dd, Do MM YYYY')}`)
    .addField("Liczba użytkowników:", message.guild.memberCount)
    .addField("Region:", `${message.guild.region.replace("eu-central", ":flag_eu: EU Central")}`)
    .addField("Kanały tekstowe:", message.guild.channels.findAll("type", "text").length)
    .addField("Kanały głosowe:", message.guild.channels.findAll("type", "voice").length)
    .addField("Role:", `${message.guild.roles.size} (Full list of roles under the **${prefix}roles** command.)`)
    .addField("Emotki:", message.guild.emojis.size)
    .addField("Właściciel(ka):", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
    .setFooter(`${message.createdAt.getHours()}:${message.createdAt.getMinutes()} | Used by ${message.author.tag}.`);
    message.channel.send(serverembed);
  }
}



module.exports = Serverinfo;
