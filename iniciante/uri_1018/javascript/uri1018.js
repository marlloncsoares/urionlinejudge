const fs = require('fs');
const input = fs.readFileSync('stdin', 'utf8');
const values = input.split('\n');

let [inputValue] = values;
inputValue = parseInt(inputValue);

let remainder = inputValue;
let setOfValues = [100, 50, 20, 10, 5, 2, 1];
let amount;
let output = [];

for (let value of setOfValues) {
    amount = parseInt(remainder / value)
    output.push(`${amount} nota(s) de R$ ${value},00`);
    remainder -= (amount * value)
}

console.log(inputValue);
for (let value of output) {
    console.log(value)
}
