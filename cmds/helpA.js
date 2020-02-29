const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
        let embed = new Discord.RichEmbed()
.setAuthor('Команды администрации')
.setDescription(`**/mute [@user] [время]**- мут учасника на время
**/unmute [@user]**- снять мут если он по ошибни или он закончился
**/ban [@user]**- забанить учасника
**/unban [user]**- снять бан по ошыбки но пользыватель не возращяется после команды
**/warn [@user][$сумма]**- дать придуприждения
**/unwarn [@user][$сумма]**- забрать придуприждения
**/kick [@user]**- кикнуть учасника
**/x**- ссылка на "Как заглушить канал"
**/say [messeges]**- сообщения через бота
**/clear [сумма сообщений]**- удалить сообщения
**/poll [сообщение]**- голосование
**/pin [ID сообщеня]**- закрепить сообщение
**/unpin [ID сообщеня]**- открепить сообщение
*"$- в крайнем случее"*`)
message.channel.send(embed)
}
module.exports.help = {
    name: "helpa"
};
 