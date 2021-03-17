const Discord = require('discord.js');
const config = require('config.js');

module.exports = {
    name: "invite",
    description: "How to invite the bot to your server.",

    async execute(client, message, args){

        //Sort your commands into categories, and make seperate embeds for each category

        const invite = new Discord.MessageEmbed()
        .setTitle('Invite Me!')
        .setDescription('Invite me helps the developers alot! We would really appreciate if you could invite our cute lil bot to show news to everyone and spread COVID-19 awareness. We are on the road to 15 guilds! Thank you so much!  c:')
        .setURL('https://discord.com/oauth2/authorize?client_id=803969494585180230&scope=bot&permissions=388160')
        .addField('Invite me here:', 'https://discord.com/oauth2/authorize?client_id=803969494585180230&scope=bot&permissions=388160')
        .addField('Discord Bot List Page', 'https://discordbotlist.com/bots/news-agent')
        .setTimestamp();
        message.channel.send({embed: invite});
        return;
    }
}