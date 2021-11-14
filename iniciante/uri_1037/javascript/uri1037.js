const fs = require('fs');
const input = fs.readFileSync('stdin', 'utf8');
const values = input.split('\n');

let [value] = values;

value = parseFloat(value);

let interval = "";
if (value >= 0 && value <= 25) {
    interval = "Intervalo [0,25]";
} else if (value > 25 && value <= 50) {
    interval = "Intervalo (25,50]";
} else if (value > 50 && value <= 75) {
    interval = "Intervalo (50,75]";
} else if (value > 75 && value <= 100) {
    interval = "Intervalo (75,100]";
} else {
    interval = "Fora de intervalo";
}

console.log(interval);
