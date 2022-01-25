const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');

const [a, b, c] = input.split(' ').map(value => parseInt(value));
let [min, max, mid] = [a, b, c];

if (min > max) [min, max] = [max, min];
if (mid > max) [mid, max] = [max, mid];
if (min > mid) [min, mid] = [mid, min];

console.log(min);
console.log(mid);
console.log(max);
console.log();
console.log(a);
console.log(b);
console.log(c)
