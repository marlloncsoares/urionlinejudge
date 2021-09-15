const input = require('fs').readFileSync('stdin', 'utf8');
const values = input.split('\n');

const [line1, line2] = values;
let [x1, y1] = line1.split(' ');
let [x2, y2] = line2.split(' ');

x1 = parseFloat(x1);
y1 = parseFloat(y1);
x2 = parseFloat(x2);
y2 = parseFloat(y2);

const distance = Math.sqrt(Math.pow((x2 - x1), 2) +  Math.pow((y2 - y1), 2));
const decimalPlaces = 4;
const distanceView = Number(distance).toFixed(decimalPlaces);

console.log(distanceView);
