const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    message.channel.send('новая заявка на мониторинг!');
    let botmessage = args.join(" ");
    bot.send(botmessage);
};
module.exports.help = {
    name: "zsmoni"
}