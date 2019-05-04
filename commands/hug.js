const Command = require("../base/Command.js");
const Discord = require("discord.js");

class Hug extends Command {
  constructor(client) {
    super(client, {
      name: "hug",
      description: "Przytula podanego użytkownika.",
      usage: "hug <@member>",
      aliases: ["przytul"]
    });
  }

  async run(message, args, level) { // eslint-disable-line no-unused-vars
    //const embed = new Discord.RichEmbed()
    //.setDescription("Aby dołączyć na serwer bota >> [KLIK](https://discord.gg/WTekf4a) << (dowiesz się tam o aktualizacjach oraz otrzymasz pomoc z botem) \n \nAby zaprosić bota na swój serwer >> [KLIK](https://discordapp.com/api/oauth2/authorize?client_id=458569537286176768&permissions=842394839&scope=bot) <<");
     //message.channel.send(embed);
    let aUser = message.mentions.users.first() || message.author || message.user.id;
    let huglinks = ["https://media.giphy.com/media/l0HlOvJ7yaacpuSas/giphy.gif", "https://media.giphy.com/media/xT39CXg70nNS0MFNLy/giphy.gif", "https://media.giphy.com/media/143v0Z4767T15e/giphy.gif", "https://media.giphy.com/media/BVRoqYseaRdn2/giphy.gif", "https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif"];
    let math = Math.floor((Math.random() * huglinks.length));
    let hugEmbed = new Discord.RichEmbed()
    .setColor("f083fa")
    .setAuthor(`Użytkownik ${message.author.tag} przytulił(a) ${aUser.tag}.`, 'https://cdn.discordapp.com/emojis/472468044871106591.png?v=1')
    .setImage("https://tenor.com/view/anime-hug-manga-cuddle-japan-gif-10522729")
    //.setImage(huglinks[math])
    let hugMe = new Discord.RichEmbed()
    .setColor("f083fa")
    .setAuthor(`${message.author.tag} przytulił(a) samego/samą siebie.`)
    .setImage(huglinks[math])
    //if(args[0] == message.author) return message.channel.send(hugMe)
    //if(!args[0]) return message.channel.send(hugMe);

    message.channel.send(hugEmbed);

    
  }
}

module.exports = Hug;
