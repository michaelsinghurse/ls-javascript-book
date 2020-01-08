// sum_numbers.js
let rlSync = require('readline-sync');

let number1 = rlSync.question('Enter the first number: ');
let number2 = rlSync.question('And the second number: ');
let sum = Number(number1) + Number(number2);

console.log(`The numbers ${number1} and ${number2} sum to ${sum}.`);