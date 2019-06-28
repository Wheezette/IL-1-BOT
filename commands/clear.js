const Command = require("../base/Command.js");

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
    
    if(!args[0]) return message.channel.send("Musisz podać ilość wiadomości do wyczyszczenia.")
      
    //if (isNaN(messagecount)) {
        //return message.reply('Ilość wiadomości do wyczyszczenia musi być cyfrą.');
    //}
    //if (messagecount <= 0 || messagecount > 100) {
      //return message.channel.send("Ilość wiadomości do wyczyszczenia musi być cyfrą większą od zera i niższą od 100.")'
    //}
    if(args[0]) return message.channel.fetchMessages({
      limit: messagecount
    }).then(messages => message.channel.bulkDelete(messages))};
    let purgeSuccessMessage = await message.channel.send(`Zostało wyczyszczone **${messagecount}** wiadomości z tego kanału!`);
    purgeSuccessMessage.delete(10000);
  }
}
module.exports = Clear;
