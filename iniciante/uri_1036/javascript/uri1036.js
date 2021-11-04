const fs = require('fs');
const input = fs.readFileSync('stdin', 'utf8');
const values = input.split(' ');

let [a, b, c] = values;
a = parseFloat(a, 10);
b = parseFloat(b, 10);
c = parseFloat(c, 10);

const delta = (b*b) -4*a*c;

if (!(delta >= 0 && a !== 0)) {
    console.log('Impossivel calcular');
    return;
}

const r1 = (-b +Math.sqrt(delta)) / (2*a);
const r2 = (-b -Math.sqrt(delta)) / (2*a);

const decimalPlaces = 5;
const r1View = Number(r1).toFixed(decimalPlaces);
const r2View = Number(r2).toFixed(decimalPlaces);

console.log(`R1 = ${r1View}`);
console.log(`R2 = ${r2View}`);
