// object-acts-like-array.js

let myArray = {0: 'first element', 1: 'second element', 2: 'third element', length: 3};

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}