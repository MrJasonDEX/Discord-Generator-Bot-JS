const discord = require('discord.js'); //Define the discord.js module
const client = new discord.Client(); //Creating discord.js client (constructor)
const disbut = require('discord-buttons');
disbut(client);

module.exports.run = async (bot, message, args, gen) => {
  let button = new disbut.MessageButton()
  .setStyle('url')
  .setURL('https://www.paypal.me/MrJasonDEX') 
  .setLabel('Donate = More Perks!')

    message.channel.send('If You Love This Bot And Want To Support!', button);
  }

module.exports.help = {
name: 'repo',
aliases: []
}
