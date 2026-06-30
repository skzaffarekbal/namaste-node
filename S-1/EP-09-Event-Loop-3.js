const fs = require('node:fs');
const a = 100;

setImmediate(() => console.log('Set Immediate 1'));

Promise.resolve('Promise').then(console.log);

fs.readFile('./read.txt', 'utf8', () => {
  setTimeout(() => console.log('Set Time Out 2'), 0);

  process.nextTick(() => console.log('process.nextTick 2'));

  setImmediate(() => console.log('Set Immediate 2'));
  
  console.log('File Read CB');
});

setTimeout(() => console.log('Set Time Out 1'), 0);

process.nextTick(() => console.log('process.nextTick 1'));

function printA() {
  console.log('a=', a);
}

printA();
console.log('End');
