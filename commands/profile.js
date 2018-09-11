const Discord = require("discord.js");
const Command = require("../base/Command.js");
const moment = require("moment");

class Profile extends Command {
  constructor(client) {
    super(client, {
      name: "profile",
      description: "Wyświetli informaje o użytkowniku.",
      usage: "profile [<@użytkownik>]",
      aliases: ["userinfo"]
    });
  }

  async run(message, args, level) { // eslint-disable-line no-unused-vars
    let aUser = message.mentions.users.first() || message.author;
    const userinfo = new Discord.RichEmbed()
    .setColor("FFA07A")
    .setAuthor(`Profil ${aUser.username}`, `https://cdn.discordapp.com/emojis/472480341299298304.png?v=1`)
    .setThumbnail(aUser.displayAvatarURL)
    .addField("ID:", `${aUser.id}`)
    .addField("Pseudonim:", `${aUser.nickname ? aUser.nickname : "None"}`)
    .addField("Konto utworzone:", `${moment(aUser.createdAt).format('DD.MM.YYYY HH:mm:ss')}`)
    .addField("Dołączył(a) do serwera:", `${moment(aUser.joinedAt).format('DD.MM.YYYY HH:mm:ss')}`)
    .addField("Czy jest botem:", `${aUser.bot}`)
    .addField("Status:", `${aUser.presence.status.replace("dnd", "Niedostępny")}`)
    .addField("Aktualna gra:", `${aUser.presence.game ? aUser.presence.game.name : 'Brak'}`)
    .setFooter(`${moment.utc(message.createdAt).format('HH:mm:ss')} | Użył(a): ${message.author.tag}.`)
    message.channel.send(userinfo);
  }
}

module.exports = Profile;
