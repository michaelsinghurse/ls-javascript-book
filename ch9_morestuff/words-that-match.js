// words-that-match.js

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];
  
console.log(logMatch(words, /lab/));

function logMatch(arr, r) {
  return arr.filter(e => r.test(e));
}