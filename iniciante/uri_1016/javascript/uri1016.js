const input = require('fs').readFileSync('stdin', 'utf8');
const values = input.split('/n');

let [distance] = values;
distance = parseInt(distance);

const time = (distance * 60) / 30;
const timeView = parseInt(time);

console.log(timeView + ' minutos');
