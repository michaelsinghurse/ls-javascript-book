// multiply
let rlsync = require('readline-sync');

const multiply = (num1, num2) => num1 * num2;

let number1 = Number(rlsync.question('Please enter a first number: '));
let number2 = Number(rlsync.question('And a second number: '));

console.log(`${number1} * ${number2} = ${multiply(number1, number2)}`);