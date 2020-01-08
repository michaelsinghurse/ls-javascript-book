// is-three-here.js

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

const isThreeHere = arr => {
  let ans = (arr.indexOf(3) !== -1) ? 'Yes!' : 'Nope';
  console.log(`Is 3 in ${arr}? ${ans}`);
}

// this only does what the problem specifies
const isThreeHereMin = arr => {
  return (arr.indexOf(3) !== -1) ? true : false;
}

isThreeHere(numbers1);
isThreeHere(numbers2);
isThreeHere(numbers3);

console.log(isThreeHereMin(numbers1));
console.log(isThreeHereMin(numbers2));
console.log(isThreeHereMin(numbers3));

// that was all overkill!
console.log(numbers1.includes(3));
console.log(numbers2.includes(3));
console.log(numbers3.includes(3));
