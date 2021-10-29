const fs = require('fs');
const input = fs.readFileSync('stdin', 'utf8');

const values = input.split('/n');
let [ monetaryValue ] = values;

const quantity100 = parseInt(monetaryValue / 100, 10);
monetaryValue = monetaryValue - (quantity100 * 100);

const quantity50 = parseInt(monetaryValue / 50, 10);
monetaryValue = monetaryValue - (quantity50 * 50);

const quantity20 = parseInt(monetaryValue / 20, 10);
monetaryValue = monetaryValue - (quantity20 * 20);

const quantity10 = parseInt(monetaryValue / 10, 10);
monetaryValue = monetaryValue - (quantity10 * 10);

const quantity5 = parseInt(monetaryValue / 5, 10);
monetaryValue = monetaryValue - (quantity5 * 5);

const quantity2 = parseInt(monetaryValue / 2, 10);
monetaryValue = monetaryValue - (quantity2 * 2);

const quantity1 = parseInt(monetaryValue / 1, 10);
monetaryValue = monetaryValue - (quantity1 * 1) + 0.00001;;;

const quantity050 = parseInt(monetaryValue / 0.50, 10);
monetaryValue = monetaryValue - (quantity050 * 0.50) + 0.00001;;;

const quantity025 = parseInt(monetaryValue / 0.25, 10);
monetaryValue = monetaryValue - (quantity025 * 0.25) + 0.00001;;;

const quantity010 = parseInt(monetaryValue / 0.10, 10);
monetaryValue = monetaryValue - (quantity010 * 0.10) + 0.00001;;;

const quantity005 = parseInt(monetaryValue / 0.05, 10);
monetaryValue = monetaryValue - (quantity005 * 0.05) + 0.00001;;

const quantity001 = parseInt(monetaryValue / 0.01, 10);
monetaryValue = monetaryValue - (quantity001 * 0.01) + 0.00001;

	
console.log('NOTAS:')
console.log(`${quantity100} nota(s) de R$ 100.00`)
console.log(`${quantity50} nota(s) de R$ 50.00`)
console.log(`${quantity20} nota(s) de R$ 20.00`)
console.log(`${quantity10} nota(s) de R$ 10.00`)
console.log(`${quantity5} nota(s) de R$ 5.00`)
console.log(`${quantity2} nota(s) de R$ 2.00`)
console.log('MOEDAS:')
console.log(`${quantity1} moeda(s) de R$ 1.00`)
console.log(`${quantity050} moeda(s) de R$ 0.50`)
console.log(`${quantity025} moeda(s) de R$ 0.25`)
console.log(`${quantity010} moeda(s) de R$ 0.10`)
console.log(`${quantity005} moeda(s) de R$ 0.05`)
console.log(`${quantity001} moeda(s) de R$ 0.01`)