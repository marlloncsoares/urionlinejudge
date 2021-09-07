const input = require('fs').readFileSync('stdin', 'utf8');
const values = input.split('\n');

let [valueA, valueB, valueC, valueD] = values;

valueA = parseInt(valueA);
valueB = parseInt(valueB);
valueC = parseInt(valueC);
valueD = parseInt(valueD);

const difference = (valueA * valueB - valueC * valueD);

console.log('DIFERENCA = ' + difference);