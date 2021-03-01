const fs = require('fs');

const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.js');
const keepAlive = require('./server.js');

const Topgg = require('@top-gg/sdk')

const api = new Topgg.Api(config.toptoken)

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('News Agent initialized.');
  setTimeout(() => {  console.log("Client completely initialized."); }, 500);
});

setInterval(() => {
  api.postStats({
    serverCount: client.guilds.cache.size,
    shardCount: client.options.shardCount
  })
}, 1800000) // post every 30 minutes
console.log('Posted Stats!')

client.on('ready', () => {
  const activities_list = [ 
    `${client.guilds.cache.size} servers`, 
    `${config.prefix}help`,
    `${config.prefix}vote`,
    `${client.guilds.cache.size} servers | ${config.prefix}help`
    ];
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        client.user.setActivity(activities_list[index], { type: 'WATCHING' });
    }, 10000);
});

client.on('guildDelete', guild => {
  const activities_list1 = [ 
    `${client.guilds.cache.size} servers`, 
    `${config.prefix}help`,
    `${config.prefix}vote`,
    `${client.guilds.cache.size} servers | ${config.prefix}help`
    ];
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list1.length - 1) + 1);
        client.user.setActivity(activities_list1[index], { type: 'WATCHING' });
    }, 10000);
});

client.on('guildCreate', guild => {
  const activities_list2 = [ 
    `${client.guilds.cache.size} servers`, 
    `${config.prefix}help`,
    `${config.prefix}vote`,
    `${client.guilds.cache.size} servers | ${config.prefix}help`
    ];
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list2.length - 1) + 1);
        client.user.setActivity(activities_list2[index], { type: 'WATCHING' });
    }, 10000);
});


client.on('message', message => {
	if (!message.content.startsWith(config.prefix) || message.author.bot) return;

	const args = message.content.slice(config.prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	if (!client.commands.has(commandName)) return;

  const command = client.commands.get(commandName);

	try {
		command.execute(client, message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

keepAlive();
client.login(process.env.TOKEN);