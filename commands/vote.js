const Discord = require('discord.js');
const config = require('config.js');

module.exports = {
    name: "vote",
    description: "Vote for the bot on top.gg!",

    async execute(client, message, args){

        //Sort your commands into categories, and make seperate embeds for each category

        const vote = new Discord.MessageEmbed()
        .setTitle('Vote')
        .setURL('https://top.gg/bot/803969494585180230/vote')
        .setDescription('Voting allows our bot to be viewed and advertised by other users on the amazing website top.gg \nWith this site, users can vote for their favorite bots every 24 hours. This will greatly help us and in the future may even come with its own perks!')
        .addField('Vote for me here (Top.gg):', 'https://top.gg/bot/803969494585180230/vote')
        .addField('Vote for me here!(Discord Bot List)', 'https://discordbotlist.com/bots/news-agent')
        .setTimestamp();
        message.channel.send({embed: vote});
        return;
    }
}