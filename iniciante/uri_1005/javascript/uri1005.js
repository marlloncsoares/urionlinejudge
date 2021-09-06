const input = require('fs').readFileSync('stdin', 'utf8');
const values = input.split('\n');

let [punctuationA, punctuationB] = values;
punctuationA = parseFloat(punctuationA);
punctuationB = parseFloat(punctuationB);

const weightA = 3.5;
const weightB = 7.5;

const average = ((punctuationA * weightA) + (punctuationB * weightB)) / (weightA + weightB);
console.log('MEDIA = ' + Number(average).toFixed(5));