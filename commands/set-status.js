module.exports = {
	name: 'set-status',
	description: 'Change Status of the Bot',
	execute(client, message, args) {
		let status1 = args[0]
        let status2 = args[1]
        let status3 = args.slice(2).join(" ")
        let time = args[3]

        let errormessage = "Oops you need to set 3 statuses and 1 number in ms for the loop."
        let nopermsmessage = "Oops, seems like you don't have permission to use this command."
        let successmessage = "Successfully, changed status!"
        
        if (message.author.id != '756289468285190294') {
            return message.channel.send(nopermsmessage);
        }

        if (args[0] = "defualt") {
        function status() {
            let status = [
            `IF YOU ARE STAYING SAFE AND WEARING A 😷`,
            `${config.prefix}vote`,
            `${client.guilds.cache.size} servers | ${config.prefix}help`
            ];

            let statusR = Math.floor(Math.random() * status.length);
            client.user.setActivity(status[statusR] , {type : "WATCHING" , status : "Online"});
        }
        setInterval(status, 7000);
            message.channel.send(successmessage)
        }
        
        if (!args[1], args[0] != "defualt") {
            message.channel.send(errormessage)
        }

        if (!args[2], args[0] != "defualt") {
            message.channel.send(errormessage)
        }

        if (!args[3], args[0] != "defualt") {
            message.channel.send(errormessage)
        }

        else if (args[1], [args2], [args3]) {
            function status() {
                    let status = [
                    `${args[0]}`,
                    `${args[1]}`,
                    `${args[2]}`
                    ];
                
                    let statusR = Math.floor(Math.random() * status.length);
                    client.user.setActivity(status[statusR] , {type : "WATCHING" , status : "Online"});
                }
                setInterval(status, args[3]);
        }
	}
}
//n!set-status n!vote n!uptime New Commands 1000 (ms)