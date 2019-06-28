const Command = require("../base/Command.js");
let Discord = require("discord.js");

class Say extends Command {
  constructor(client) {
    super(client, {
      name: "say",
      description: "Wysyła wiadomość o podanej treści na kanał.",
      usage: "say <wiadomość>",
      aliases: ["sayy"]
    });
  }

  async run(message, args, level) { // eslint-disable-line no-unused-var
    //let sayMessage = args.join(" ");
    let errEmb = new Discord.RichEmbed()
    .setColor("bc3b3b")
    .setAuthor("Wystąpił Błąd")
    .setDescription("Wymagane jest podanie wiadomości, którą chcesz wysłać.\n**Poprawne użycie:** `!say <wiadomość>`.")
    .setFooter(`Jeśli błąd nie ustąpi napisz do programisty bota.`);
    
    if(!args[0]) {
      return message.channel.send(errEmb);
    } else {
      message.delete();
      message.channel.send(args.join(" "));
    }
  }
}
module.exports = Say;
