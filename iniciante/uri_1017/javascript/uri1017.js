const input = require('fs').readFileSync('stdin', 'utf8');
const values = input.split('\n');

let [timeSpent, averageSpeed] = values;

timeSpent = parseInt(timeSpent);
averageSpeed = parseInt(averageSpeed);

const distance = timeSpent * averageSpeed;
const liters = (1000 * (distance * 1000)) / 12000;
const decimalPlaces = 3;
const litersView = Number(liters / 1000).toFixed(decimalPlaces);

console.log(litersView);