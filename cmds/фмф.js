const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let user = message.mentions.users.first();
    if(!user) user = message.author;
    let color = message.member.displayHexColor;
    if (color == '#000000') color = message.member.hoistRole.hexColor;
    const embed = new Discord.RichEmbed()
  .setImage(user.avatarURL)
  .setColor(color)
  .setFooter(message.author.tag,message.author.avatarURL)
  message.channel.send({embed});
};
module.exports.help = {
    name: "ava"
};