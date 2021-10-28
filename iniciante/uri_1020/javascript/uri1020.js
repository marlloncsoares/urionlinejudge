const fs = require('fs');
const input = fs.readFileSync('./dev/stdin', 'utf8');
const values = input.split('\n');

let [ageInDays] = values;
ageInDays = parseInt(ageInDays);

let rest = 0;

const numberOfYears = parseInt(ageInDays / 365);
rest = ageInDays - (numberOfYears * 365);

const numberOfMonths = parseInt(rest / 30);
rest = rest - (numberOfMonths * 30);

const numberOfDays = rest;

console.log(`${numberOfYears} ano(s)`);
console.log(`${numberOfMonths} mes(es)`);
console.log(`${numberOfDays} dia(s)`);
