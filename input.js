// input.js: For managing user input(keyboard)

// Stores the active TCP connection object.
let connection;

//Time to start listening for user input via the keyboard.
// setup interface to handle user input from stdin

const setupInput = function (conn) {

  connection = conn; //an object that lets you interact with the server

  const stdin = process.stdin; //stdin object returned by setupInput will allow us to listen for keyboard input and react to it 
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // Now I need event listener for stdin => this listener will use handleUserInput function that runs when you receive input from your keyboard
  // stdin.on("data", handleUserInput);
  stdin.on("data", key => handleUserInput(key)); //using function with key parameter
  
  return stdin;
};

const handleUserInput = function(key) {

  if (key === "m") {
    connection.write("Say: hii")
  }
  if (key === "w") {
    //console.log("up");
    connection.write("Move: up");
  }
  if (key === "a") {
    //console.log("left");
    connection.write("Move: left");
  }
  if (key === "s") {
    //console.log("down");
    connection.write("Move: down");
  }
  if (key === "d") {
    //console.log("right");
    connection.write("Move: right");
  }

  //function to contrlo cntrl+c
  if (key === '\u0003') {
    process.exit();
  }
}; 

module.exports = { setupInput };