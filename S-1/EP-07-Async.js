const fs = require('node:fs');
const https = require('node:https');

console.log('Start');

var a = 10686567;
var b = 20986;

https.get('https://dummyjson.com/products/1', (res) => {
  console.log('Fetch Data');
});

setTimeout(() => {
  console.log('Set Time Out after 3 sec.');
}, 3000);

fs.readFile('./read.txt', 'utf8', (err, data) => {
  console.log('READ : ', data);
});

function multiplyFn(x, y) {
  const result = x * y;
  return result;
}

console.log('Multiply : ', multiplyFn(a, b));

console.log('End');
