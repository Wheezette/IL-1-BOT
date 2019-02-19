const Command = require("../base/Command.js");
const Discord = require("discord.js");

class Porngif extends Command {
  constructor(client) {
    super(client, {
      name: "porngif",
      description: "Wyswietla gif nsfw",
      usage: "porngif",
      aliases: ["nsfwgif"]
    });
  }

  async run(message, args, level) { // eslint-disable-line no-unused-vars
    if(!message.channel.nsfw) return message.channel.send(":x: The channel must be nsfw!")
    let pornlinks = ["https://www.pornhub.com/gif/8183971"];
    let math = Math.floor((Math.random() * pornlinks.length));
    let porngifEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(":peach: Sex / porngif | Good Job :wink::")
    .setImage(pornlinks[math])
    .setFooter(`${message.author.tag} | ${message.createdAt.getHours()}:${message.createdAt.getMinutes()}`)
    message.channel.send(porngifEmbed);
  }
}

module.exports = Porngif;
