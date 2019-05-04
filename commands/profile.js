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
  //  .setThumbnail(aUser.displayAvatarURL)
   // .addField("ID:", `${aUser.id}`)
  //  .addField("Pseudonim:", `${aUser.nickname ? aUser.nickname : "None"}`)
   // .addField("Konto utworzone:", `${moment(aUser.createdAt).format('DD.MM.YYYY HH:mm:ss')}`)
   // .addField("Dołączył(a) do serwera:", `${moment(aUser.joinedAt).format('DD.MM.YYYY HH:mm:ss')}`)
   // .addField("Status:", `${aUser.presence.status.replace("dnd", "Niedostępny")}`)
    //.addField("Gra w:", `${aUser.presence.game ? aUser.presence.game.name : 'nic'}`)
    //.setFooter(`${moment.utc(message.createdAt).format('HH:mm:ss')} | Vextie by Nastti#5705`)
    //message.channel.send(userinfo);
    message.channel.send("**INFORMACJE O UŻYTKOWNIKU**\n```css\n" + `Nazwa               ::    ${aUser.username} \nDyskryminator       ::    #${aUser.discriminator}\nID            :: ${aUser.id}\nPseudonim           ::    ${aUser.nickname ? aUser.nickname : "None"}\nKonto utworzone     ::    ${moment(aUser.createdAt).format('DD.MM.YYYYr. HH:mm:ss')}\nData dołączenia     ::    ${moment(aUser.joinedAt).format('DD.MM.YYYY HH:mm:ss')}\nStatus              ::    ${aUser.presence.status.replace("dnd", "Nie przeszkadzać")}\nAktualna Gra        ::    ${aUser.presence.game ? aUser.presence.game.name : '-----'}\nAvatar użytkownika pod !avatar @${aUser.tag}` + "\n```**PortalCraft.pl ©2019**");

  }
}

module.exports = Profile;
