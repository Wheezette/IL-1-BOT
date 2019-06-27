const Command = require("../base/Command.js");

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
    message.delete();
    message.channel.send(args.join(" "));
  }
}
module.exports = Say;
