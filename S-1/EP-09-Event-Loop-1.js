const fs = require('node:fs');
const a = 100;

setImmediate(() => console.log('Set Immediate'));

fs.readFile('./read.txt', 'utf8', () => console.log('File Read CB'));

setTimeout(() => console.log('Set Time Out'), 0);

function printA() {
  console.log('a=', a);
}

printA();
console.log('End');
