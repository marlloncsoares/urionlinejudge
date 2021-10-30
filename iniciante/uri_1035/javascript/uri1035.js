const fs = require('fs');
const input = fs.readFileSync('stdin', 'utf8');
const values = input.split(' ');

let [a, b, c, d] = values;

a = parseInt(a);
b = parseInt(b);
c = parseInt(c);
d = parseInt(d);

if ( (b > c) && (d > a) && ((c+d) > (a+b)) && (c >= 0) && (d >= 0) && (a % 2 === 0)) {
    console.log("Valores aceitos");
} else {
    console.log("Valores nao aceitos");
}