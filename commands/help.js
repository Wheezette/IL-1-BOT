
const Command = require("../base/Command.js");
const Discord = require("discord.js");
const moment = require("moment");

/*
  The HELP command is used to display every command's name and description
  to the user, so that he may see what commands are available. The help
  command is also filtered by level, so if a user does not have access to
  a command, it is not shown to them. If a command name is given with the
  help command, its extended help is shown.
*/
class Help extends Command {
  constructor(client) {
    super(client, {
      name: "help",
      description: "Displays all the available commands for you.",
      category: "System",
      usage: "help [polecenie]",
      aliases: ["h", "halp"]
    });
  }

  async run(message, args, level) {
    // If no specific command is called, show all filtered commands.
    if (!args[0]) {
      // Load guild settings (for prefixes and eventually per-guild tweaks)
      const settings = message.settings;
      
      // Filter all commands by which are available for the user's level, using the <Collection>.filter() method.
      const myCommands = message.guild ? this.client.commands.filter(cmd => this.client.levelCache[cmd.conf.permLevel] <= level) : this.client.commands.filter(cmd => this.client.levelCache[cmd.conf.permLevel] <= level &&  cmd.conf.guildOnly !== true);
      
      // Here we have to get the command names only, and we use that array to get the longest name.
      // This make the help commands "aligned" in the output.
      const commandNames = myCommands.keyArray();
      const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
      let currentCategory = "";
      let output = `= Lista poleceń =\n\n[Użyj ${this.client.config.defaultSettings.prefix}help <polecenie> po więcej]\n`;
      const sorted = myCommands.array().sort((p, c) => p.help.category > c.help.category ? 1 :  p.help.name > c.help.name && p.help.category === c.help.category ? 1 : -1 );
      sorted.forEach( c => {
        const cat = c.help.category.toProperCase();
        if (currentCategory !== cat) {
          output += `\u200b\n== ${cat} ==\n`;
          currentCategory = cat;
        }
        output += `${settings.prefix}${c.help.name}${" ".repeat(longest - c.help.name.length)} :: ${c.help.description}\n`;
      });
      const helpmsg = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle('Moje polecenia')
        .setDescription("Moje komendy są naprawde super, znajdziesz je poniżej!")
        .addField('Główne (3):', '`stats`, `mylevel`')
        .addField('Fun (0):', '*Brak komend w tej kategorii*')
        .addField('Administracyjne (1):', '`config`')
        .addField('Zdjęcia (0):', '*Brak komend w tej kategorii*')
        .addField('Information (2):', '`serverinfo`, `profile`')
        .addField('Adm. Bota (3):', '`reload`, `reboot`, `eval`')
        .setFooter('Użyj help <komenda> po więcej!')
    //  message.channel.send(output, {code:"asciidoc", split: { char: "\u200b" }});
      message.channel.send(helpmsg);
    } else {
      // Show individual command's help.
      let command = args[0];
      if (this.client.commands.has(command)) {
        command = this.client.commands.get(command);
        if (level < this.client.levelCache[command.conf.permLevel]) return;
        const embed123 = new Discord.RichEmbed()
        .setAuthor(`Komenda ${command.help.name}`)
        .setDescription(`${command.help.description} \n**Użycie:** ${command.help.usage} \n**Aliasy:** ${command.conf.aliases.join(", ")}`)
        .setFooter(`${moment(message.createdAt).format('HH:mm:ss')} | Użył(a): ${message.author.tag}.`);
        message.channel.send(embed123);
        //message.channel.send(`= ${command.help.name} = \n${command.help.description}\nUżycie: ${command.help.usage}\nAliasy: ${command.conf.aliases.join(", ")}`, {code:"asciidoc"});
      }
    }
  }
}

module.exports = Help;
