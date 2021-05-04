const net = require("net"); //Node's library

// establishes a connection with the game server
const connect = function() {

  // we used Node's net library and createConnection function to create obj named conn
  // conn obj represents the connection that you have with the server
  const conn = net.createConnection({  
    host: "10.0.2.15", // IP address here
    port: "50541" // PORT number here
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();