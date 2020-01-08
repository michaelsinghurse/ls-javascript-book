// factorial.js

const factorial = num => {
  let result = 1;
  
  if (num === 0 || num === 1) {
    return result;
  }
  
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  
  return result;
};

const factorialRec = num => {
  if (num <= 1) {
    return 1;
  }
  
  return num * factorialRec(num - 1);
  
  // could write more succinctly like...
  //return (num <= 1) ? 1 : num * factorialRec(num - 1);
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));
console.log(factorial(8));


console.log(factorialRec(0));
console.log(factorialRec(1));
console.log(factorialRec(2));
console.log(factorialRec(3));
console.log(factorialRec(4));
console.log(factorialRec(5));
console.log(factorialRec(6));
console.log(factorialRec(7));
console.log(factorialRec(8));