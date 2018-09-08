const Command = require("../base/Command.js");

class Reload extends Command {
  constructor(client) {
    super(client, {
      name: "reload",
      description: "Reloads a command that has been modified.",
      category: "Bot Admins",
      usage: "reload [command]",
      permLevel: "Developer Bota"
    });
  }

  async run(message, args, level) { // eslint-disable-line no-unused-vars
    if (!args || args.size < 1) return message.channel.send("Podaj polecenie do przeładowania.");
    
    const commands = this.client.commands.get(args[0]) || this.client.commands.get(this.client.aliases.get(args[0]));
    if (!commands) return message.channel.send(`Polecenie \`${args[0]}\` nie istnieje, lub jest to alias.`);

    let response = await this.client.unloadCommand(commands.conf.location, commands.help.name);
    if (response) return message.channel.send(`Błąd wyładowania: ${response}`);

    response = this.client.loadCommand(commands.conf.location, commands.help.name);
    if (response) return message.channel.send(`Błąd ładowania: ${response}`);

    message.channel.send(`Polecenie \`${commands.help.name}\` zostało przeładowane!`);
  }
}
module.exports = Reload;
