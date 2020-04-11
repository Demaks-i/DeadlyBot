const Discord = require('discord.js');
module.exports.run = async (bot,message,args) => {

let error = new Discord.RichEmbed()
    .setColor('#800080')
    .setDescription("**<:683301845246148624:691191192289017858>У меня нет прав на выдачу ролей, пожалуйста перейдите в настройки. И дайте мне это право!**")
var role = message.mentions.roles.first();
var member = message.mentions.members.first();
var arg = new Array()
arg[0] = member
arg[1] = role
let embed = new Discord.RichEmbed()
    .setColor('#800080')
    .setDescription("**Укажите участника которому хотите дать роль!**")
if(!arg[0]) return message.channel.send(embed)
let embedik = new Discord.RichEmbed()
    .setColor('#800080')
    .setDescription("**Укажите роль которую хотите дать участнику!**")
if(!arg[1])return message.channel.send(embedik)
member.addRole(role)
let ember = new Discord.RichEmbed()
    .setColor('#800080')
    .addField('**Выдал роль**', message.author)
    .addField("**Участнику**", member.user)
    .addField("**Выдана роль**", role)
message.channel.send(ember)
}
module.exports.help = {
    name: 'addrole',
    aliases: ['пинг'],
    description: 'роль',
    usages: { '!addrole': `выдать участнику роль` },
    category: '👾Модерирование'
};
