const Discord = require("discord.js");
const Command = require("../base/Command.js");
const moment = require("moment");

class Avatar extends Command {
  constructor(client) {
    super(client, {
      name: "avatar",
      description: "Wyświetli informaje o użytkowniku.",
      usage: "avatar [<@użytkownik>]",
      aliases: ["av"]

    });

  }



  async run(message, args, level) { // eslint-disable-line no-unused-vars
    let aUser = message.mentions.users.first() || message.author;
    const avatarEmbed = new Discord.RichEmbed()
    .setColor("6f62da")
    .setAuthor(`Avatar ${aUser.tag}`, `https://cdn.discordapp.com/emojis/472480341299298304.png?v=1`)
    .setImage(aUser.displayAvatarURL)
   // .addField("ID:", `${aUser.id}`)
  //  .addField("Pseudonim:", `${aUser.nickname ? aUser.nickname : "None"}`)
   // .addField("Konto utworzone:", `${moment(aUser.createdAt).format('DD.MM.YYYY HH:mm:ss')}`)
   // .addField("Dołączył(a) do serwera:", `${moment(aUser.joinedAt).format('DD.MM.YYYY HH:mm:ss')}`)
   // .addField("Status:", `${aUser.presence.status.replace("dnd", "Niedostępny")}`)
    //.addField("Gra w:", `${aUser.presence.game ? aUser.presence.game.name : 'nic'}`)
    //.setFooter(`${moment.utc(message.createdAt).format('HH:mm:ss')} | Vextie by Nastti#5705`)
    //message.channel.send(userinfo);
    message.channel.send(avatarEmbed);
  }
}

module.exports = Avatar;
