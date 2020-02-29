const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
        let embed = new Discord.RichEmbed()
.setAuthor('*КАК ПОДАТЬ ЗАЯВКУ?*')
.setColor('#e22216')
.setDescription(`**1. ИМЯ СЕРВЕРА
2. ССЫЛКА НА СЕРВЕР В ЛС АДМИНИСТРАЦИИ
3. НИК И ТЕГ СОЗДАТЕЛЯ `)
message.channel.send(embed)
}
module.exports.help = {
    name: "zshelp"
};