const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let embed = new Discord.RichEmbed()
    .setDescription("Info invite")
    .setColor('RANDOM')
    .addField("Invite bot:", "[Тык](https://discordapp.com/oauth2/authorize?client_id=683028315165950029&permissions=8&scope=bot)")
    .setFooter(message.author.tag,message.author.avatarURL)
    message.channel.send(embed)

};
module.exports.help = {
    name: "invite"
};