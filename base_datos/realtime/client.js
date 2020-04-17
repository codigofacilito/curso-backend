const io = require('socket.io-client');

let host = 'http://localhost:3000';

if(process.env.NODE_ENV && process.env.NODE_ENV == 'production'){
  host = 'https://dry-fortress-62286.herokuapp.com/';
}



let socket = io.connect(host,{reconnect: true});

socket.on('connect',function(){
  console.log("\n\nSocket connected from NodeJS\n\n")
})

module.exports = socket;
