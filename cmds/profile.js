client.on('message', message =>{ // ивент, когда приходит любое сообщение в чат https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-message
    if (message.author.bot) return; // если автор сообщения - бот, ничего не происходит 
    if (message.content == '/profile') { // если пользователь написал "!профиль" 
    let embed = new Discord.MessageEmbed() // создание ембед сообщения
    .setTitle(message.author.username) // в тайтле имя автора 
    let status = ''
    switch (message.author.presence.status) { // проверка статусов 
        case 'online':
            status = 'онлайн'; break; 
            case 'idle':
                status = ':orange_circle:нет на месте'; break;
                case 'offline':
                    status = 'нет в сети'; break;
                    case 'dnd':
                        status = ':red_circle:не беспокоить'; break;
    }
    embed.setDescription(`**Ваш дискорд айди: ${message.author.id}
    Ваш статус: ${status}
    Дата создания аккаунта: ${message.author.createdAt.toLocaleDateString()}
    Дата входа на сервер: ${message.member.joinedAt.toLocaleDateString()}
    **`) // описание ембеда
    .setColor('RANDOM') // рандомный цвет ембеда
    .setThumbnail(message.author.avatarURL()) // вставляем в ембед аватарку пользователя
    message.channel.send(embed) // отправляем сообщение в канал где была написана команда   
    }
})
