// find-largest-in-list.js

let list1 = [1, 6, 3, 2];
let list2 = [-1, -6, -3, -2];
let list3 = [2, 2];
let list4 = [1, 10, 2, 25, 3];

const findLargest = arr => {
  //return arr.sort((a, b) => a - b).reverse()[0];
  return arr.sort((a, b) => b - a)[0];
};

const printResults = arr => {
  console.log(`The largest for ${arr} is ${findLargest(arr)}`);
};

printResults(list1);
printResults(list2);
printResults(list3);
printResults(list4);