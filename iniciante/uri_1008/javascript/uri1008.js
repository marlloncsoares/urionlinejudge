const input = require('fs').readFileSync('stdin', 'utf8');
const values = input.split('\n');

let [id, workedHours, hourlyPrice] = values;

id = parseInt(id);
workedHours = parseInt(workedHours);
hourlyPrice = parseFloat(hourlyPrice);

const salary = (workedHours * hourlyPrice);
const decimalPlaces = 2;
const salaryView = Number(salary).toFixed(decimalPlaces);

console.log('NUMBER = ' + id);
console.log('SALARY = U$ ' + salaryView);