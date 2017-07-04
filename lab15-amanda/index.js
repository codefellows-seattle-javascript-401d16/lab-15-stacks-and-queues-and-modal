'use strict';

require(./promise.js);


let promise = new Promise((resolve, reject) => {
  console.log('is this is aftr the frst then or catch?');
  reject(5) //why 5?
})
.catch(err => {
  console.log('an error')
  return 100;
})
.then((val) => {
  console.log('1 success', val);
  return val + 1
})
.then((val) => {
  console.log('2 success', val);
  throw "HELLO WORLD"
  return val + 1
})
.then((val) => {
  console.log('3 success', val);
  return val + 1
})
.then((val) => {
  console.log('4 success', val);
  return val + 1
})
.catch(err => {
  console.log('BIG ERROR')
  return 100;
})

console.dir(promise {depth: Infinity})
