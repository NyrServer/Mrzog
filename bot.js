
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const moment = require('moment');
const jimp = require('jimp');
const Canvas = require('canvas');
 const prefix = "*";
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
  if(message.content.includes('1p')){
                                          if(!message.channel.guild) return message.reply('** NYR  **');
      if (!message.member.hasPermissions(['ADMINISTRATOR'])){
      message.delete()
  return message.reply(`** هذا الرووم ليس مخصص للاوامر ! **`)
  }
}
});
 
 
client.login(process.env.BOT_TOKEN);
