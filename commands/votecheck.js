const Discord = require('discord.js');

const config = require('../config.js');
const Topgg = require('@top-gg/sdk')
const api = new Topgg.Api(config.toptoken)


module.exports = {
	name: 'votecheck',
	description: 'Check if the user has voted for News Agent on top.gg',
	execute(client, message, args) {

    api.hasVoted(message.author.id).then(c => {
          if(c) {
            message.channel.send(`Yay ${message.author.username}! You voted for me on top.gg in the past 12 hours! Go tell all your friends to vote as well!`)
          } else {
            message.channel.send(`:o ${message.author.username} you haven't voted for me on top.gg in the past 12 hours! Go vote for me now at https://top.gg/bot/803969494585180230`)
          }
        });
      }
    }







// const Discord = require('discord.js');

// const config = require('../config.js');
// const Topgg = require('@top-gg/sdk')
// const api = new Topgg.Api(config.toptoken)
// let checkreturn = false;


// module.exports = {
// 	name: 'votecheck',
// 	description: 'Check if the user has voted for News Agent on top.gg',
// 	execute(client, message, args) {

//     args[1] = message.member.id;
//     if (args[1]) {
//     checkreturn = false;
    
//     if (message.content.includes(args[1])) {
    
//     api.hasVoted(args[1]).then(c => {
//       checkreturn = true;
//           if(c) {
//             message.channel.send(`Yay ${message.author.username}! You voted for me on top.gg in the past 12 hours! Go tell all your friends to vote as well!`)
//           } else {
//             message.channel.send(`:o ${message.author.username} you haven't voted for me in the past 12 hours! Go vote for me now at https://top.gg/bot/803969494585180230`)
//           }
//         });
//       }
//     }
//     if (checkreturn === false) {
    
//       api.hasVoted(message.author.id).then(c => {
//       if(c) {
//         message.channel.send(`Yay ${message.author.username}! You voted for me on top.gg in the past 12 hours! Go tell all your friends to vote as well!`)
//       } else {
//         message.channel.send(`:o ${message.author.username} you haven't voted for me in the past 12 hours! Go vote for me now at https://top.gg/bot/803969494585180230`)
//       }
//       });
//     }
//   }
// }