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

  async run(message, args, level) { // eslint-disable-line no-unused-var
    let stream = args.slice(1).join(" ");
    let game = args.slice(1).join(" ");
    let listen = args.slice(1).join(" ");
    let watch = args.slice(1).join(" ");
    let reset = args.slice(1).join(" ");
    if(!args[0]) return message.channel.send(':x: You must provide a value! Correct use: `cb!rich <game/stream/watch/listen> <text>`');
    if(args[0] == 'game') return bot.user.setActivity(game),  message.channel.send(`${bot.emojis.find(`name`, 'alert')} Bot started playing in **${game}**.`);
            //message.channel.send(`:wink: Bot zaczął grać w **${game}**.`);
        //let stream = args.slice(1).join(" ");
    if(args[0] == 'stream') return bot.user.setGame(`${stream}`, 'https://twitch.tv/xcookietm'), message.channel.send(`${bot.emojis.find(`name`, 'alert')} Bot started broadcasting live **${stream}**.`);
            //message.channel.send(`:wink: Bot zaczął nadawać na żywo **${stream}**.`);
    if(args[0] == 'listen') return bot.user.setActivity(`${listen}`, {type: 'LISTENING'}), message.channel.send(`${bot.emojis.find(`name`, 'alert')} Bot started to listen **${listen}**.`);
    if(args[0] == 'watch') return bot.user.setActivity(`${watch}`, {type: 'WATCHING'}), message.channel.send(`${bot.emojis.find(`name`, 'alert')} Bot began to watch **${watch}**.`);
    if(args[0] == 'reset') return bot.user.setActivity(`${reset}`), message.channel.send(`${bot.emojis.find(`name`, 'alert')} The status of the bot has been reset.`);
    if(args[0] == 'servers') return bot.user.setActivity(`${bot.guilds.size} servers`), message.channel.send(`${bot.emojis.find(`name`, 'alert')} The status of the bot has been set to the number of servers.`);
  }
module.exports = Rich;
