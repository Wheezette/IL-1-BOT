const Command = require("../base/Command.js");

class Rich extends Command {
  constructor(client) {
    super(client, {
      name: "rich",
      description: "Zmiana statusu w grze dla bota.",
      usage: "rich <game/stream/watch/listen> <text>",
      aliases: ["setrich"]
    });
  }

  async run(message, args, level) { // eslint-disable-line no-unused-vars
    try {
      const msg = await message.channel.send("🏓 Ping!");
      msg.edit(`🏓 Pong! (Roundtrip took: ${msg.createdTimestamp - message.createdTimestamp}ms. 💙: ${Math.round(this.client.ping)}ms.)`);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = Rich;
