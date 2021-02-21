const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
        let embed = new Discord.RichEmbed()
.setAuthor('Команды')
.setColor('#e22216')
.setDescription(`**/ping** - пинг бота
**/serverinfo**- информацыя о сервере
**/userinfo**- информацыя о человеке
**/idea (сама идея) (повторите идею)**- идея для сервера (писать в #идеи)
**/helpa**- команды для администрации
**/info**- команда пока не работает
**/serverlist**- сервера на которых есть бот
**/report [@user] [жалоба]**- жалоба на юзера
**/invite**-пригласить бота на сервер
**/8ball (вопрос)**- задать вопрос
**/bug (баг) (повтор бага)**-ваш баг
**/ava [@user]**-аватар юзера
**/profile [@user]**- профиль человека `)
.addField("Сайт бота:", "[Наш сайт](https://deadly-bot.glitch.me/)")
.setFooter(message.author.tag,message.author.avatarURL)
message.channel.send(embed)
}
module.exports.help = {
    name: "help"
};
 
