
const { connect } = require("./client");

console.log("Connecting ...");
connect();

//Time to start listening for user input via the keyboard.
// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin; //stdin object returned by setupInput will allow us to listen for keyboard input and react to it 
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // Now I need event listener for stdin => this listener will use handleUserInput function that runs when you receive input from your keyboard
  stdin.on("data", handleUserInput);
  
  return stdin;
};