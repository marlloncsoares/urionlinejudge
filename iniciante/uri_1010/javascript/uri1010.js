const input = require('fs').readFileSync('stdin', 'utf8');
const values = input.split('\n');

let [line_1, line_2] = values;
line_1 = line_1.split(' ');
line_2 = line_2.split(' ');

let [id_1, numberOfPieces_1, unitaryValue_1] = line_1;
let [id_2, numberOfPieces_2, unitaryValue_2] = line_2

id_1 = parseInt(id_1);
numberOfPieces_1 = parseInt(numberOfPieces_1);
unitaryValue_1 = parseFloat(unitaryValue_1);

id_2 = parseInt(id_2);
numberOfPieces_2 = parseInt(numberOfPieces_2);
unitaryValue_2 = parseFloat(unitaryValue_2);

const amountToPay = (numberOfPieces_1 * unitaryValue_1) + (numberOfPieces_2 * unitaryValue_2);
const decimalPlaces = 2;
const amountToPayView = Number(amountToPay).toFixed(decimalPlaces);

console.log('VALOR A PAGAR: R$ ' + amountToPayView);