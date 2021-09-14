const Discord = require('discord.js')
module.exports.run = async (bot, message, args, gen) => {
    let embed = new Discord.MessageEmbed()
    .setTitle('Gen Commands')
    .setColor(bot.color)
    .setThumbnail('https://cdn.discordapp.com/app-icons/880376481858093066/93547c4415e4b6eab8e7974318d2bc21.png?size=64')
    .setDescription('This Command Prompt Is To Help And You How The Bot.')
    .addField('$help','Shows you a options account')
    .addField('$gen (acc type)', 'Gens you an account')
    .addField('$stock','Shows you a list of all accounts in stock')
    .addField('$repo','Shows some info about the bot!')
    .setFooter('Made by Gaming Network |')
    .setTimestamp()
       message.channel.send(embed)
       setTimeout(() => message.delete(), 10000);
    }
    
module.exports.help = {
    name: 'help',
    aliases: []
}