// age.js
let rlsync = require('readline-sync');

const ageInDecades = (currentAge, numDecades) => {
  console.log(`You are ${currentAge} years old.`);
  for (let i = 1; i <= numDecades; i++) {
    console.log(`In ${i * 10} years, you will be ${currentAge + i * 10} years old.`);
  }
};

let age = parseInt(rlsync.question("Please tell me your current age: "));
let decades = parseInt(rlsync.question("And how many decades out? "));

console.log();
ageInDecades(age, decades);