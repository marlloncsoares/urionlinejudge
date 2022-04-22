const fs = require('fs');
const input = fs.readFileSync('stdin', 'utf8');
const [valueX, valueY, valueZ] = input.split(' ').map((line) => parseFloat(line));

const isTriangle = (a, b, c) => (a + b > c && a + c > b && b + c > a);

if (isTriangle(valueX, valueY, valueZ)) {
    const perimeter = (valueX + valueY + valueZ);
    console.log('Perimetro = ' + Number(perimeter).toFixed(1));
} else {
    const area = ((valueX + valueY) * valueZ / 2);
    console.log('Area = ' + Number(area).toFixed(1));
}
