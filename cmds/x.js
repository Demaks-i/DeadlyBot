const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("У вас нет прав");
    message.channel.send('https://images-ext-2.discordapp.net/external/bWtA_FoD8YLZlH2THJPdBV4PBnQgrk2X7hBFvavQfKY/https/media.discordapp.net/attachments/561924092509290496/663378519916544010/Untitled.gif')
};
module.exports.help = {
    name: "x"
};