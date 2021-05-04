
const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
// connect();
const conn = connect();//making connection

setupInput(conn);