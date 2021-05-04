// client.js is A Separate Module For The TCP Connection

const net = require("net"); //Node's library
const { IP, PORT } = require('./constants');

// establishes a connection with the game server
const connect = function() {

  // we used Node's net library and createConnection function to create obj named conn
  // conn obj represents the connection that you have with the server
  // const conn = net.createConnection({  
  //   host: "10.0.2.15", // IP address here
  //   port: "50541" // PORT number here
  // });                                       Update:

  const conn = net.createConnection({  
    host: IP, // IP address here
    port: PORT // PORT number here
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //conn.on("event name", functionThatDoesSomething);  //.on is a methode as event handler
  // connect : specific event that happens when a successful connection is made
  conn.on("connect", () => {
    console.log('From Client: Successfully connected to Server!'); //print msg for players

    // conn.write("Move: up"); //after connecting do move up(I used existing connect callback, but we can creat new one) //Update:
    // setTimeout(() => {
    //   conn.write("Move: up"); //syntax send data from client to server
    // }, 1000);
  });

  // earliest point at which the client can start sending data/messages to the server: As soon as the connection is successfully established
  conn.write("Name: Mah"); //syntax send data from client to server

  // Print messages from server to the console:
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  
  return conn;
};

// module.exports is an obj so we can export functions with key
module.exports = { connect };