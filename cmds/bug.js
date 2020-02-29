const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    let rreason = args.join(" ").slice(22);
    if(!rreason) return message.channel.send("Введите баг");

    let embed = new Discord.RichEmbed()
    .setColor('#800080')
    .addField("📝Баг от", `${message.author} with ID: ${message.author.id}`)
    .addField("📢Канал", message.channel)
    .addField("📄Сам баг", rreason)

    let okaydm = new Discord.RichEmbed()
    .setColor('#800080')
        .addField(`Возможно ваш баг  будет исправлен!`)
        message.channel.send(okaydm)
let rpchannel = message.guild.channels.find('name', 'bugs')
if(!rpchannel) return message.channel.send("Не удалось найти канал для отчетов");
rpchannel.send(embed)

}

module.exports.help = {
  name: "bug",
  aliases: []
}