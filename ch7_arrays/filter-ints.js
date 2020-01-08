// filter-ints.js

let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

const filterIntegers = arr => {
  return arr.filter(e => Number.isInteger(e));
}

console.log(filterIntegers(array));