const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login('NTk0MjUwOTMyMjA4Nzk1NjUz.XRZ2cg.QHaPq-pgZO3Sk5biAiwZyo5aAmw');

bot.on('ready', () => {
    console.log('TCHOIN est prête!');
  });

  bot.on('message', message => {
    if (message.content === 'ping') {
    message.channel.sendMessage('pong');
  }
});