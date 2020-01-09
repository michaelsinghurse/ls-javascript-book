// copy-object-func.js

const copyObj = (obj, arr = []) => {
  let rObj = {};
  
  if (arr.length === 0) {
    rObj = Object.assign({}, obj);
  } else {
    arr.forEach(e => {
      rObj[e] = obj[e];
    });
  }
  
  return rObj;
};


let objToCopy = {
  foo: 1,
  bar: 2,
};

let newObj = copyObj(objToCopy);
console.log(newObj.foo);
console.log(newObj.bar);

let newObj2 = copyObj(objToCopy, ['foo']);
console.log(newObj2.foo);
console.log(newObj2.bar);