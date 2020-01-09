// object-keys-to-array.js

let obj = {
  b: 2, 
  a: 1,
  c: 3,
};

let a = [];

for (let k in obj) {
  a.push(k.toUpperCase());  
}

console.log(a);

// more succinct implementation
let b = Object.keys(obj).map(e => e.toUpperCase());

console.log(b);