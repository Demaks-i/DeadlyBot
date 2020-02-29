  
const Discord = module.require("discord.js");


module.exports.run = async (bot, message, args) => {
 
let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField("Сервера:", bot.guilds.map(x => `| **NAME: ${x.name}** | \n| **ID: ${x.id}** | \n| **MEMBERS: ${x.memberCount}** |\n`) )
    .setFooter(message.author.tag,message.author.avatarURL)
    .setTimestamp()
    .setFooter(message.author.tag,message.author.avatarURL)
    .setTimestamp()
    message.channel.send(embed)

}

module.exports.help = {
    name: "serverslist",
    aliases: []
};