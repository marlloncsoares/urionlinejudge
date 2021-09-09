const input = require('fs').readFileSync('stdin', 'utf8');
const values = input.split('\n');

let [name, salary, salesResult] = values;

salary = parseFloat(salary);
salesResult = parseFloat(salesResult);

const commission = 0.15;
const totalReceivable = salary + (salesResult * commission);
const decimalPlaces = 2;
const totalReceivableView = Number(totalReceivable).toFixed(decimalPlaces);

console.log('TOTAL = R$ ' + totalReceivableView);