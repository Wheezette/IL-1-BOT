const Command = require("../base/Command.js");
const Discord = require("discord.js");

class Config extends Command {
  constructor(client) {
    super(client, {
      name: "config",
      description: "Wprowadza zmiany w konfiguracji serwera.",
      category: "System",
      usage: "config <view/get/edit> <klucz> <wartość>",
      guildOnly: true,
      aliases: ["setting", "settings"],
      permLevel: "Administrator Serwera"
    });
  }

  async run(message, [action, key, ...value], level) { // eslint-disable-line no-unused-vars

    // First we need to retrieve current guild settings
    const settings = message.settings;
    const defaults = this.client.settings.get("default");
    const overrides = this.client.settings.get(message.guild.id);
    if (!this.client.settings.has(message.guild.id)) this.client.settings.set(message.guild.id, {});
  
    // Secondly, if a user does `-set edit <key> <new value>`, let's change it
    if (action === "edit") {
      // User must specify a key.
      if (!key) return message.channel.send("Musisz podać klucz, który chcesz edytować.");
      // User must specify a key that actually exists!
      if (!settings[key]) return message.channel.send("Podany przez Ciebie klucz nie istnieje.");
      // User must specify a value to change.
      const joinedValue = value.join(" ");
      if (joinedValue.length < 1) return message.channel.send("Podaj wartość, która ma zostać ustawiona.");
      // User must specify a different value than the current one.
      if (joinedValue === settings[key]) return message.channel.send("To ustawienie zawiera już wartość, którą podałeś(aś).");

      // If the guild does not have any overrides, initialize it.
      if (!this.client.settings.has(message.guild.id)) this.client.settings.set(message.guild.id, {});

      // Modify the guild overrides directly.
      this.client.settings.set(message.guild.id, joinedValue, key);
      message.channel.send(`Klucz **${key}** został edytowany na **${joinedValue}**.`);
    } else
  
    // If a user does `-set del <key>`, let's ask the user if they're sure...
    if (action === "del" || action === "reset") {
      if (!key) return message.channel.send("Musisz podać klucz, który chcesz zresetować do domyślnej wartości.");
      if (!settings[key]) return message.channel.send("Podany przez Ciebie klucz nie istnieje.");
      if (!overrides[key]) return message.channel.send("This key does not have an override and is already using defaults.");

      // Throw the 'are you sure?' text at them.
      const response = await this.client.awaitReply(message, `Czy napewno chcesz zresetować klucz \`${key}\` do domyślnej wartości \`${defaults[key]}\`? Wpisz pod tą wiadomością **tak** jeśli chcesz zresetować, lub **anuluj** jeśli chcesz anulować.`);

      // If they respond with y or yes, continue.
      if (["y", "yes", "tak"].includes(response)) {

        // We reset the `key` here.
        this.client.settings.delete(message.guild.id, key);
        message.channel.send(`Klucz **${key}** został zresetowany do domyślnej wartości.`);
      } else

      // If they respond with n or no, we inform them that the action has been cancelled.
      if (["n","no","cancel", "anuluj", "nie"].includes(response)) {
        message.channel.send(`Klucz \`${key}\` pozostał na \`${settings[key]}\``);
      }
    } else
  
    // Using `-set get <key>` we simply return the current value for the guild.
    if (action === "get") {
      if (!key) return message.channel.send("Musisz podać klucz, który chcesz zobaczyć.");
      if (!settings[key]) return message.reply("Podany przez Ciebie klucz nie istnieje.");
      message.reply(`Wartość klucza **${key}** jest ustawiona na **${settings[key]}**`);
      
    } else {
      // Otherwise, the default action is to return the whole configuration;
      const array = [];
      Object.entries(settings).forEach(([key, value]) => {
        array.push(`${key}${" ".repeat(15 - key.length)}::  ${value}`); 
      });
      await message.channel.send("**KONFIGURACJA SERWERA** \n```asciidoc\n" + `${array.join("\n")}` + "``` Wersja bota z dnia 27.06.2019r.");
    //  const confEmbed = new Discord.RichEmbed()
    //  .setAuthor("KONFIGURACJA SERWERA")
   //   .setDescription(`${array.join("\n")}`);
  //    await message.chanel.send(confEmbed);
     // await message.channel.send(`= Konfiguracja serwera =\n${array.join("\n")}`, {code: "asciidoc"});
    }
  }
}

module.exports = Config;
