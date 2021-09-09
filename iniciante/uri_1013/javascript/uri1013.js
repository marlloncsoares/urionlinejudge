const input = require('fs').readFileSync('stdin', 'utf8');
const values = input.split(' ');

let [valueA, valueB, valueC] = values;

valueA = parseInt(valueA);
valueB = parseInt(valueB);
valueC = parseInt(valueC);

let major = (valueA + valueB + Math.abs(valueA - valueB)) / 2;
major = (major + valueC + Math.abs(major - valueC)) / 2;

console.log(major + ' eh o maior');