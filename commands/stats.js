module.exports = {
	name: 'stats',
	description: 'Shows stats (servers, guild names etc)',
	execute(client, message) {
    message.channel.send(`Guild Count: ${client.guilds.cache.size}`);
    message.channel.send(`Member Count: ${client.users.cache.size}`);
	}
};
    