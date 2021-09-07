const input = require('fs').readFileSync('stdin', 'utf8');
const values = input.split('\n');

let [punctuationA, punctuationB, punctuationC] = values;

punctuationA = parseFloat(punctuationA);
punctuationB = parseFloat(punctuationB);
punctuationC = parseFloat(punctuationC);

const weightA = 2;
const weightB = 3;
const weightC = 5;

const average = ((punctuationA * weightA) + (punctuationB * weightB) + (punctuationC * weightC)) / (weightA + weightB + weightC);

console.log('MEDIA = ' + Number(average).toFixed(1));