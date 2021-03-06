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
    let messagecount = parseInt(args.join(" "));
    let errEmb = new Discord.RichEmbed()
    .setColor("bc3b3b")
    .setAuthor("Wystąpił Błąd")
    .setDescription("Wymagane jest podanie ilości wiadomości do wyczyszczenia.\n**Poprawne użycie:** `!clear <ilość>`.")
    .setFooter(`Jeśli błąd nie ustąpi napisz do programisty bota.`);
    
    let errEmbb = new Discord.RichEmbed()
    .setColor("bc3b3b")
    .setAuthor("Wystąpił Błąd")
    .setDescription("Bot nie ma uprawnień do wykonania komendy `" + message.content + "`.\n**Dodaj uprawnienie:** `MANAGE_MESSAGES` (Zarządzanie Wiadomościami) dla bota.")
    .setFooter(`Jeśli błąd nie ustąpi napisz do programisty bota.`);
    
    let succEmb = new Discord.RichEmbed()
    .setColor("55d959")
    .setAuthor("Powodzenie")
    .setDescription("Wiadomości na chacie zostały wyczyszczone.\n**Ilość wiadomości:** `" + args.join(" ") + "`.")
    .setFooter(`Komenda użyta przez ${message.author.tag}.`);
    
    //if (!message.channel.permissionsFor(message.author).hasPermission("MANAGE_MESSAGES")) {
      //message.channel.send(errEmbb);
      //return;
    if(!args[0]) {
      return message.channel.send(errEmb);
    } else {
      message.delete();
      
    //if (isNaN(messagecount)) {
        //return message.reply('Ilość wiadomości do wyczyszczenia musi być cyfrą.');
    //}
    //if (messagecount <= 0 || messagecount > 100) {
      //return message.channel.send("Ilość wiadomości do wyczyszczenia musi być cyfrą większą od zera i niższą od 100.")'
    //}
      message.channel.fetchMessages({
        limit: messagecount
      }).then(messages => message.channel.bulkDelete(messages))};
      let purgeSuccessMessage = await message.channel.send(succEmb);
      //let purgeSuccessMessage = await message.channel.send(`Zostało wyczyszczone **${messagecount}** wiadomości z tego kanału!`);
      purgeSuccessMessage.delete(10000);
   }
}
module.exports = Clear;
