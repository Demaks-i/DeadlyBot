const Discord = require("discord.js");
module.exports.run = (bot, message, args) => { 
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .addField(`<:603266701991084053:680064557099647036> Ping bot`, `**${bot.ping}**`)
    .setThumbnail('https://discordemoji.com/assets/emoji/2366_Loading_Pixels.gif');
    message.channel.send(embed);
};
module.exports.help = {
    name: "ping"
};