const Command = require("../base/Command.js");
const Discord = require("discord.js");

class Clear extends Command {
  constructor(client) {
    super(client, {
      name: "clear",
      description: "Wysyła wiadomość o podanej treści na kanał.",
      usage: "clear <ilość>",
      aliases: ["purge"]
    });
  }

  async run(message, args, level) { // eslint-disable-line no-unused-var
    ss
   }
}
module.exports = Clear;
