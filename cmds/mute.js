const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!args[0]) return bot.send("Вы не указали пользователя");
    if(!rUser) return bot.send("Пользователь не найден");
    if(!args[1]) return bot.send("Укажите время в секундах");
    let embed = new Discord.RichEmbed()
    .setDescription("mute")
    .setColor('#e22216')
    .addField("Администратор",message.author.username)
    .addField("Замутили",`${rUser.user.username}`);
    let role = message.guild.roles.find(r => r.name === "Op");
    if(!role){
        role = await message.guild.createRole({
            name:"Muted",
            permissions:[ADMINISTRATOR]
        });
        message.guild.channels.forEach(async (channel,id) => {
            await channel.overwritePermissions(role,{
                SEND_MESSAGES:false,
                ADD_REACTIONS:false
            });
        });
    };
    if(rUser.roles.has(role.id)) return bot.send("Этот пользователь уже не может говорить");
    bot.mutes[rUser.id] = {
        guild:message.guild.id,
        time:parseInt(Date.now() + (args[1]*1000)),
    };
    fs.writeFile('./mutes.json',JSON.stringify(bot.mutes),(err)=>{
        if(err) console.log(err);
    });

    rUser.addRole(role);
};
module.exports.help = {
    name: "mute"
};
