const Discord = require('discord.js')
 
module.exports.run = async (bot, message, args, gen) => {
    let embed = new Discord.MessageEmbed()
     .setTitle('**Accounts In Stock**')
     .setColor(bot.color)
     .setThumbnail('https://cdn.discordapp.com/app-icons/880376481858093066/93547c4415e4b6eab8e7974318d2bc21.png?size=64')
     .setFooter('Made by Gaming Network |')
     .setTimestamp()
     gen.calculateStock()
     setTimeout(() => {
         const stock = gen.stock
        for(const type of stock) {
            embed.addField(type[0], type[1], true)
        }
        message.channel.send(embed)
        setTimeout(() => message.delete(), 10000);
     }, 200);
     
 }
 module.exports.help = {
     name: 'stock',
     aliases: []
 }