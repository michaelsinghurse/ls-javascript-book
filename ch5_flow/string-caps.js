// string-caps.js

const stringAllCapsIfOver10 = str => {
  return (str.length > 10) ? str.toUpperCase() : str;
};

console.log(stringAllCapsIfOver10('michael'));
console.log(stringAllCapsIfOver10('nathanael'));
console.log(stringAllCapsIfOver10('zofiasinghurse'));