const input = require('fs').readFileSync('stdin', 'utf8');
const values = input.split('\n');

let [totalDistance, totalFuel] = values;

totalDistance = parseInt(totalDistance);
totalFuel = parseFloat(totalFuel);

const averageConsumption =  totalDistance / totalFuel;
const decimalPlaces = 3;
const averageConsumptionView = Number(averageConsumption).toFixed(decimalPlaces);

console.log(averageConsumptionView + ' km/l');