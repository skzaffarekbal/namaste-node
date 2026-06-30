const fs = require('node:fs');
const a = 100;

setImmediate(() => console.log('Set Immediate'));

Promise.resolve('Promise').then(console.log);

fs.readFile('./read.txt', 'utf8', () => console.log('File Read CB'));

setTimeout(() => console.log('Set Time Out'), 0);

process.nextTick(() => console.log('process.nextTick'));

function printA() {
  console.log('a=', a);
}

printA();
console.log('End');
