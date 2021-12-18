const fs = require('fs');
const input = fs.readFileSync('stdin', 'utf8');

const values = input.split(' ');
let [itemCode, quantity] = values;
const itemTable = [4, 4.5, 5, 2, 1.5];

itemCode = parseInt(itemCode, 10);
quantity = parseInt(quantity, 10);

const totalToPay = itemTable[(itemCode - 1)] * quantity;

console.log(`Total: R$ ${totalToPay.toFixed(2)}`);
