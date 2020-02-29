const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let embed = new Discord.RichEmbed()
    .setDescription("Информация об боте")
    .setColor('RANDOM')
    .addField("Создатель бота","@Demaks I#5415")
    .addField("<:603266701991084053:680064557099647036>bot ping",`**${bot.ping}**`)
    .addField("Support Сервер бота:", "[Тык](https://discord.gg/yfy2AS)")
    .setFooter(message.author.tag,message.author.avatarURL)
    .setTimestamp()
    .setThumbnail('https://cdn.discordapp.com/attachments/680070628216537108/680436560608493595/32ab124897c4b3fc44bbb534743ee860.png');
    message.channel.send(embed)

};
module.exports.help = {
    name: "info"
};