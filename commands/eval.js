const Command = require("../base/Command.js");
const Discord = require("discord.js");

class Eval extends Command {
  constructor(client) {
    super(client, {
      name: "eval",
      description: "Evaluje podany kod.",
      category:"Bot Admins",
      usage: "eval <expression>",
      aliases: ["ev"],
      permLevel: "Twórczyni Bota"
    });
  }

  async run(message, args, level) { // eslint-disable-line no-unused-vars
  //  const code = args.join(" ");
 //   try {
    //  const evaled = eval(code);
  //    const clean = await this.client.clean(this.client, evaled);
 //     message.channel.send(`\`\`\`js\n${clean}\n\`\`\``);
  //  } catch (err) {
   //   message.channel.send(`\`ERROR\` \`\`\`xl\n${await this.client.clean(this.client, err)}\n\`\`\``);
 //   }
    let errorMessage = new Discord.RichEmbed()
    .setColor("c92a2a")
    .setAuthor("Wystąpił błąd", "https://cdn.discordapp.com/emojis/574326640444964874.png?v=1")
    .setDescription("Musisz podać kod, który chcesz eval'ować.")
    if(!args[0]) return message.channel.send(errorMessage);
    let result = eval(args.join(" ")).toString()
    let embed = new Discord.RichEmbed()
          //.setTitle("Eval")
    .addField(`Wejście`, "```"+args.join(" ")+"```")
    .addField(`Wyjście`, "```"+result+"```")
    .setColor("RANDOM")
    .setFooter(`Kod eval'owany przez ${message.author.tag}`, `https://cdn.discordapp.com/emojis/472480341299298304.png?v=1`)
     message.channel.send(embed);
  }
}

module.exports = Eval;
