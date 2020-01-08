// factorial.js

function times(number1, number2) {
  let result = number1 * number2;
  console.log(result);
  return result;
}

let one = times(1, 1); // 1
let two = times(one, 2); // 2
let three = times(two, 3); // 6
let four = times(three, 4); // 24
let five = times(four, 5); // 120