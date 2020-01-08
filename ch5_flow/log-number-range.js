// log-number-range.js

const logNumberRange = num => {
  let range = '';
  
  if (num >= 0 && num <= 50) {
    range = 'between 0 and 50'; 
  } else if (num >= 51 && num <= 100) {
    range = 'between 51 and 100';
  } else if (num > 100) {
    range = 'greater than 100';
  } else {
    range = 'less than 0'
  }
  
  console.log(`${num} is ${range}`);
}

logNumberRange(0);
logNumberRange(59);
logNumberRange(1000.33313);
logNumberRange(-5);