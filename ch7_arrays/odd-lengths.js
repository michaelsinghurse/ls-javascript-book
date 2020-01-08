// odd-lengths.js

let myArray = ['a', 'abcd', 'abcde', 'abc', 'ab'];

const keepOddLengths = arr => {
  let mapArr = arr.map(e => e.length);
  return mapArr.filter(e => e % 2 !== 0);
}

const keepOddLengthsRef = arr => {
  return arr.map(e => e.length).filter(e => e % 2 !== 0);
}

console.log(keepOddLengths(myArray));
console.log(keepOddLengthsRef(myArray))