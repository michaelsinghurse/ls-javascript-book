// log-evens-nested.js

let myArray = [[1, 3, 6, 11], [4, 2, 4], [9, 17, 17, 0]];

myArray.forEach(arr => {
  arr.forEach(num => {
    if (num % 2 === 0) {
      console.log(num);
    }
  });
});