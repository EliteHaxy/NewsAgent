module.exports = {
	name: 'adminstats',
	description: 'Shows stats (servers, guild names etc)',
	execute(client, message) {
    if (message.member.id != '756289468285190294') 
    return message.channel.send("Oops seems like you can't use this command. :x:");
		const Guilds = client.guilds.cache.map(guild => guild.name);
    // message.channel.send(Guilds);
    message.channel.send(`Guild Count: ${client.guilds.cache.size}`);
    message.channel.send(`Member Count: ${client.users.cache.size}`);
	}
};