const express = require('express');
const server = express();

server.all('/', (req, res)=>{
       res.send('Bot Status: \nNews Agent launched')
})
function keepAlive(){
        server.listen(3000, ()=>{console.log("24/7 Hosting initialized.")
        })
}
module.exports = keepAlive;