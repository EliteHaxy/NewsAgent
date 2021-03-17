const pagination = require('discord.js-pagination');
const Discord = require('discord.js');
const config = require('config.js');

module.exports = {
    name: "help",
    description: "The help command, what did you expect?",

    async execute(client, message, args){

        //Sort your commands into categories, and make seperate embeds for each category

        const weather = new Discord.MessageEmbed()
        .setTitle('Weather')
        .addField(`n!weather`, 'Shows the current weather in your city.')
        .addField('Example:', `n!weather New York City`)
        .addField('Example 2:', `n!weather London`)
        .addField('Disclaimer:', '*Be sure to type the valid city with the first letter in capitals.*')
        .setTimestamp();

        const covid = new Discord.MessageEmbed()
        .setTitle('COVID-19 Cases')
        .addField(`n!cases`, 'Shows cases of your country.')
        .addField('Example:', `n!cases all`)
        .addField('Example 2:', `n!cases Canada`)
        .addField('Disclaimer:', '*Be sure to type the valid country with the first letter in capitals.*')
        .setTimestamp();

        const information = new Discord.MessageEmbed()
        .setTitle('Information')
        .setDescription('News Agent is a multiple purpose discord bot that shows your weather as well as COVID-19 cases around you! Lets say you wanted to go out for a walk today. And you wanted to know the weather and cases around you. All you need to do is type `n!weather (location)` and `n!cases (location)` and voila! Simple enough! You can now go outside and enjoy the extravagent weather.')
        .addField('Invite Me!','https://discord.com/oauth2/authorize?client_id=803969494585180230&scope=bot&permissions=388160')
        .addField('Vote for Me! (Top.gg)', `https://top.gg/bot/803969494585180230`)
        .addField('Vote for Me! (Discord Bot List)', `https://discordbotlist.com/bots/news-agent`)
        .setTimestamp();

        const vote = new Discord.MessageEmbed()
        .setTitle('Vote')
        .setURL('https://top.gg/bot/803969494585180230/vote')
        .setDescription('Voting allows our bot to be viewed and advertised by other users on the amazing website top.gg \nWith this site, users can vote for their favorite bots every 24 hours. This will greatly help us and in the future may even come with its own perks!')
        .addField('Vote for me here (Top.gg):', 'https://top.gg/bot/803969494585180230/vote')
        .addField('Vote for me here!(Discord Bot List)', 'https://discordbotlist.com/bots/news-agent')
        .setTimestamp();

        const extra = new Discord.MessageEmbed()
        .setTitle('Extra Commands')
        .addField(`n!help`, 'Shows this embed with all commands')
        .addField('n!info', `Shows information about the bot with the invite and vote links.`)
        .addField('n!invite', `Invite URL to invite this bot.`)
        .addField('n!uptime', `Show bot's current uptime.`)
        .addField('n!vote', 'Vote for the bot on top.gg. In the future we might add perks to this!')
        .addField('n!ping', `Show the bot's current ping.`)
        .addField('n!votecheck', `Checks if you have voted for News Agent on top.gg.`)
        .addField('n!stats', 'Shows the total number of guilds and total number of members the bot is in.')
        .setTimestamp();

        const invite = new Discord.MessageEmbed()
        .setTitle('Invite Me!')
        .setDescription('Invite me helps the developers alot! We would really appreciate if you could invite our cute lil bot to show news to everyone and spread COVID-19 awareness. We are on the road to 15 guilds! Thank you so much!  c:')
        .setURL('https://discord.com/oauth2/authorize?client_id=803969494585180230&scope=bot&permissions=388160')
        .addField('Invite me here:', 'https://discord.com/oauth2/authorize?client_id=803969494585180230&scope=bot&permissions=388160')
        .addField('Discord Bot List Page', 'https://discordbotlist.com/bots/news-agent')
        .setTimestamp();

        const pages = [
                information,
                covid,
                weather,
                extra,
                invite,
                vote
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}