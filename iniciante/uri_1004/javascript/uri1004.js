const input = require('fs').readFileSync('stdin', 'utf8');
const values = input.split('\n');

let [x, y] = values;
x = parseInt(x);
y = parseInt(y);
const prod = x * y;

console.log("PROD = " + prod);