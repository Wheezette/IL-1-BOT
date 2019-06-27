const Command = require("../base/Command.js");

class Reboot extends Command {
  constructor(client) {
    super(client, {
      name: "reboot",
      description: "If running under PM2, the bot will restart.",
      category: "Bot Admins",
      usage: "reboot",
      aliases: [],
      permLevel: "IceLeaders Team - CEO"
    });
  }

  async run(message, args, level) { // eslint-disable-line no-unused-vars
    const settings = this.client.getSettings(message.guild.id);
    if (settings.language === "pl") {
    //try {
      await message.channel.send("**Bot powinien zostać ponownie włączony, jeśli zaś nie to napisz do IceLeaders Team - CEO...**");
      this.client.commands.forEach(async cmd => {
        await this.client.unloadCommand(cmd);
      });
      process.exit(1);
    //} catch (e) {
      //console.log(e);
    //}
    }
    const settings = this.client.getSettings(message.guild.id);
  }
}

module.exports = Reboot;
