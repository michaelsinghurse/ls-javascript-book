// greeter.js
let rlsync = require('readline-sync');

// I didn't follow the directions exactly my first time.
/*
const getFullName = () => {
  let firstName = rlsync.question('What is your first name? ');
  let lastName = rlsync.question('And your last? ');
  return `${firstName} ${lastName}`;
}

console.log(`Well, hello, ${getFullName()}!`);
*/

const answerQuestion = question => rlsync.question(question + ' ');

let fName = answerQuestion('What is your first name?');
let lName = answerQuestion('And your last?');

console.log(`Hello, ${fName} ${lName}!`);