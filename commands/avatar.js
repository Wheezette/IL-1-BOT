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
    let aUser = message.mentions.users.first(); //|| message.author;
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
    let errorMessage = new Discord.RichEmbed()
    .setColor("d42d2d")
    .setAuthor("Wystąpił Błąd", "https://www.google.pl/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiSwtPu04LiAhVxposKHWw8Cq4QjRx6BAgBEAU&url=https%3A%2F%2Fwww.imagenesmy.com%2Fimagenes%2Ferror-icon-d7.html&psig=AOvVaw3ZrGvMtXQMvqLsWM32pW9P&ust=1557086082110444")
    .setDescription("Musisz podać osobę do wyświetlenia avatara.")
    .setImage("https://www.google.pl/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiT0Ny804LiAhVqpIsKHae6DRgQjRx6BAgBEAU&url=https%3A%2F%2Fwallpapersafari.com%2Fcomputer-error-wallpaper%2F&psig=AOvVaw3l34SZInBXfJ38wU9DKrVh&ust=1557085980008482")
    if(!args[0]) return message.channel.send(errorMessage);
    message.channel.send(avatarEmbed);
  }
}

module.exports = Avatar;
