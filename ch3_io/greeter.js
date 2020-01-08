// greeter.js
let rlsync = require('readline-sync');

let firstName = rlsync.question('What is your first name? ');
let lastName = rlsync.question('And your last? ');

console.log(`Well, hello, ${firstName} ${lastName}!`);