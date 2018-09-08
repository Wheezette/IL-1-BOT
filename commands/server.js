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
    .addField("Utworzony:", `${moment(message.author.createdAt).format('DD.MM.YYYY HH:mm:ss')}`)
    .addField("Dołączyłeś(aś):",`${moment(message.author.joinedAt).format('DD.MM.YYYY HH:mm:ss')}`)
    .addField("Liczba użytkowników:", message.guild.memberCount)
    .addField("Region:", `${message.guild.region}`)
    .addField("Kanały tekstowe:", message.guild.channels.findAll("type", "text").length)
    .addField("Kanały głosowe:", message.guild.channels.findAll("type", "voice").length)
    .addField("Role:", `${message.guild.roles.size}`)
    .addField("Emotki:", message.guild.emojis.size)
    .addField("Właściciel(ka):", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
    .setFooter(`${moment(message.createdAt).format('HH:mm:ss')} | Użył(a): ${message.author.tag}.`);
    message.channel.send(serverembed);
  }
}



module.exports = Serverinfo;
