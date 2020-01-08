// even-or-odd.js

const evenOrOdd = num => {
  // check that num is an integer
  if (num % 1 !== 0) {
    console.log('please enter an integer');
    return;
  }
  
  if (num % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

console.log('4:');
evenOrOdd(4);
console.log('3:');
evenOrOdd(3);
console.log('5.3134:');
evenOrOdd(5.3134);