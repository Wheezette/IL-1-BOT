const Command = require("../base/Command.js");
const Discord = require("discord.js");
const db = require("quick.db");

class Ver extends Command {
  constructor(client) {
    super(client, {
      name: "ver",
      description: "Ustawia weryfikację na serwerze.",
      usage: "weryfikacja",
      aliases: ["weryfikacja"]
    });
  }

  async run(message, args, level) { // eslint-disable-line no-unused-var
    if(args[0] === "channel"){
      const verChannelValue = args[1];
      if (verChannelValue.length < 1) return message.channel.send("Musisz podać id kanału.");
      if (verChannelValue === db.get("weryfikacja.channel")) return message.channel.send("ID kanału jest takie samo, jakie było poprzednio.");
      
      db.set("weryfikacja.channel", verChannelValue);
      message.channel.send("Kanał weryfikacji został ustawiony.");
    }
   }
}
module.exports = Ver;
