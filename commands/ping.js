module.exports = {
	name: 'ping',
	description: 'Shows ping of bot and API',
	execute(client, message, args) {
		message.channel.send(`🏓 Ping is ${Date.now() - message.createdTimestamp}ms.`);
	},
};