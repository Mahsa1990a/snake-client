// move any CONSTANT_VALUES into a separate module

// Configure server & port
const IP = "localhost"; // Use 135.23.222.131 for LHL server
const PORT = 50541;     // Use 50542 for LHL port

// Configure movement keys
const moveUpKey     = "\u0077";  // Key 'w'
const moveDnKey     = "\u0073";  // Key 's'
const moveLeftKey   = "\u0061";  // Key 'a'
const moveRightKey  = "\u0064";  // Key 'd'
const messageKey1   = "\u006D";  // Key 'm'
const messageKey2   = "\u0079";  // Key 'y'

module.exports = { IP, PORT, moveUpKey, moveDnKey, moveLeftKey, moveRightKey, messageKey1, messageKey2};