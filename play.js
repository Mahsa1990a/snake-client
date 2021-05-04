
const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
// connect(); connect() returns an object that can be used to interact with the server
// the object returned by connect() should be passed into setupInput()
const conn = connect();//making connection

setupInput(conn);