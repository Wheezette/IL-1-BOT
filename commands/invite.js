const Command = require("../base/Command.js");
const Discord = require("discord.js");

class Invite extends Command {
  constructor(client) {
    super(client, {
      name: "invite",
      description: "Link do serwera pomocy i zaproszenia bota.",
      usage: "invite",
      aliases: ["inv"]
    });
  }

  async run(message, args, level) { // eslint-disable-line no-unused-vars
    const embed = new Discord.RichEmbed()
    .setDescription("Aby dołączyć na serwer bota >> [KLIK](https://discord.gg/WTekf4a) << (dowiesz się tam o aktualizacjach oraz otrzymasz pomoc z botem) \nAby zaprosić bota na swój serwer >> [KLIK](https://discordapp.com/api/oauth2/authorize?client_id=458569537286176768&permissions=842394839&scope=bot) <<");
     message.channel.send(embed);
  }
}

module.exports = Invite;
