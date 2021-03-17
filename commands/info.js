const Discord = require('discord.js');

module.exports = {
    name: "info",
    description: "Shows description of the bot.",

    async execute(client, message, args){

        //Sort your commands into categories, and make seperate embeds for each category

        const information = new Discord.MessageEmbed()
        .setTitle('Information')
        .setDescription('News Agent is a multiple purpose discord bot that shows your weather as well as COVID-19 cases around you! Lets say you wanted to go out for a walk today. And you wanted to know the weather and cases around you. All you need to do is type `n!weather (location)` and `n!cases (location)` and voila! Simple enough! You can now go outside and enjoy the extravagent weather.')
        .addField('Invite Me!','https://discord.com/oauth2/authorize?client_id=803969494585180230&scope=bot&permissions=388160')
        .addField('Vote for Me! (Top.gg)', `https://top.gg/bot/803969494585180230/vote`)
        .addField('Vote for Me! (Discord Bot List)', `https://discordbotlist.com/bots/news-agent`)
        .setTimestamp();
        message.channel.send({embed: information});
        return;
    }
}