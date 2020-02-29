const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    try {
    
        let us = message.mentions.users.first() || message.author;
        let coins = bot.profile.fetch(`coins_${us.id}`);
        let lcoins = bot.lprofile.fetch(`coins_${us.id}_${message.guild.id}`);
        if (coins === null) await bot.profile.set(`coins_${us.id}`, 0);
        if (lcoins === null) await bot.lprofile.set(`coins_${us.id}_${message.guild.id}`, 0);
        coins = bot.profile.fetch(`coins_${us.id}`);
        lcoins = bot.lprofile.fetch(`coins_${us.id}_${message.guild.id}`);

       
     
        let embed = new Discord.RichEmbed()
    } catch (err) {
        let bk = require('../botconfig.json');
        let a = bot.users.get(bk.admin)
        let errEmb = new Discord.RichEmbed()
            .setTitle(`${err[0]}`)
            .setColor('#ff2400')
            .addField(`**${err.name}**`, `**${err.message}**`)
            .setFooter(`${err[1]} ${a.tag}`, bot.user.avatarURL)
            .setTimestamp();
        bot.send(errEmb);
        console.log(err.stack);
    };

};
module.exports.help = {
    name: "balance",
    aliases: ["bal", '$']
};