const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const fs = require('fs');
bot.mutes = require('./mutes.json');
let config = require('./botconfig.json');
let token = config.token;
let prefix = config.prefix;
let profile = require('./profile.json');
fs.readdir('./cmds/',(err,files)=>{
    if(err) console.log(err);
    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <=0) console.log("Нет комманд для загрузки!!");
    console.log(`Загружено ${jsfiles.length} комманд`);
    jsfiles.forEach((f,i) =>{
        let props = require(`./cmds/${f}`);
        console.log(`${i+1}.${f} Загружен!`);
        bot.commands.set(props.help.name,props);
    });
});
bot.on('guildCreate', (guild) => {
    let channels = guild.channels.filter(channel => channel.type === 'text' && channel.permissionsFor(guild.members.get(bot.user.id)).has('SEND_MESSAGES'));
    if (channels.size > 0) channels.first().send('Приветствую! Спасибо, что пригласили меня на этот сервер!\nесли нужна Какета помощь обрашится к Deadly mail\nчтобы посмотреть мои команды надо всети команду /help\nмой префикс /\nесли че можно попасть на Support просто веди команду /info и там будет внизу сервер Support');
});

bot.on('message', async (message) => {
    if(message.channel.id != "678948782989115403") return;
    message.react(`✅`)
    message.react(`❌`)
    message.react(`💯`)
    message.react(`🚧`)
    message.react(`📁`)
    message.react(`💡`)
    message.react(`🔥`)
    })

bot.on("guildCreate", async(guild) =>{
   
  let nserv = new Discord.RichEmbed()
  .setTitle("Я зашол на сервер")
  .addField("Сервер", guild.name)
  .addField("Владелец ", `${guild.owner.user.tag}`)
  .addField("юзеров", guild.memberCount)
   bot.channels.get("683030539673796660").send(nserv)
});
bot.on("guildDelete", async(guild) =>{
  
  let rserv = new Discord.RichEmbed()
  .setTitle("Я покинул сервер" )
  .addField("Сервер", guild.name)
  .addField("Владелец ", `${guild.owner.user.tag}`)
  .addField("юзеров", guild.memberCount)
   
 bot.channels.get("683030539673796660").send(rserv)
})
bot.on('ready', () => {
    console.log(`Запустился бот ${bot.user.username}`);
    bot.generateInvite(["ADMINISTRATOR"]).then(link =>{
        console.log(link);
bot.user.setStatus("online"); // сам ставишь idle, dbd, invisible или online
setInterval(function(){
    switch(Math.ceil(Math.random()*13+1)){ // 7-число статусов! Его надо менять тоже
        case 1:
        bot.user.setActivity(`на ${bot.users.size} участника`,{ type: 'WATCHING'})
        break;
        case 2:
        bot.user.setActivity(`на ${bot.guilds.size} сервер`,{ type: 'WATCHING'})
        break;
        case 3:
        bot.user.setActivity(`VimeWorld.ru`,{ type: 'PLAYING'})
        break;
        case 4:
        bot.user.setActivity(`Minecraft`,{ type: 'PLAYING'})
        break;
        case 5:
        bot.user.setActivity(`Spotify`,{ type: 'LISTENING'})
        break;
        case 6:
        bot.user.setActivity(`GTA 5`,{ type: 'PLAYING'})
        break;
        case 7:
        bot.user.setActivity(`на ${bot.users.size} участника`,{ type: 'WATCHING'})
        break;
        case 8:
        bot.user.setActivity(`участников ${bot.users.size} серверов ${bot.guilds.size} ` ,{type: 'STREAMING', url:"https://www.twitch.tv/deni2121"})
        break;
        case 9:
        bot.user.setActivity(`за разработкай` ,{type: 'WATCHING'})
        break;
        case 10:
        bot.user.setActivity(`GS:GO`,{ type: 'PLAYING'})
        break;
        case 11:
        bot.user.setActivity(`/help`,{ type: 'PLAYING'})
        break;
        case 12:
        bot.user.setActivity(`за сервером Deadly Empire`,{ type: 'WATCHING'})
        break;
        case 13:
        bot.user.setActivity(`музыку🎶`,{ type: 'LISTENING'})
        break;
                
}
  },5000);
        for(let i in bot.mutes){
            let time = bot.mutes[i].time;
            let guildid = bot.mutes[i].guild;
            let guild = bot.guilds.get(guildid);
            let member = guild.members.get(i);
            let muteRole = member.guild.roles.find(r => r.name === "Muted"); 
            if(!muteRole) continue;

            if(Date.now()>= time){
                member.removeRole(muteRole);
                delete bot.mutes[i];
                fs.writeFile('./mutes.json',JSON.stringify(bot.mutes),(err)=>{
                    if(err) console.log(err);
                });
            }
        }

    },5000)

});
bot.on('guildMemberAdd',(member)=>{
    let role = member.guild.roles.find(r => r.name === "[I]Незнакомчик");
    member.addRole(role);
});

bot.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
    let uid = message.author.id;
    bot.send = function (msg){
        message.channel.send(msg);
    };
    if(!profile[uid]){
        profile[uid] ={
            coins:10,
            warns:0,
            xp:0,
            lvl:1,
        };
    };
    let u = profile[uid];

    u.coins++;
    u.xp++;

    if(u.xp>= (u.lvl * 5)){
        u.xp = 0;
        u.lvl += 1;
    };


    fs.writeFile('./profile.json',JSON.stringify(profile),(err)=>{
        if(err) console.log(err);
    });
    let messageArray = message.content.split(" ");
    let command = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);
    if(!message.content.startsWith(prefix)) return;
    let cmd = bot.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(bot,message,args);
    bot.rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    bot.uId = message.author.id;
});
bot.login(token);
