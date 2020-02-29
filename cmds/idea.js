const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    let rreason = args.join(" ").slice(22);
    if(!rreason) return message.channel.send("Введите идею");

    let embed = new Discord.RichEmbed()
    .setColor('#800080')
    .addField("📝Идея от", `${message.author} with ID: ${message.author.id}`)
    .addField("📢Канал", message.channel)
    .addField("📄Сама идея", rreason)

    let okaydm = new Discord.RichEmbed()
    .setColor('#800080')
        .addField(`Возможно ваша идея будет использывана!`)
        message.channel.send(okaydm)
let rpchannel = message.guild.channels.find('name', 'idea')
if(!rpchannel) return message.channel.send("Не удалось найти канал для отчетов");
rpchannel.send(embed)

}

module.exports.help = {
  name: "idea",
  aliases: []
}