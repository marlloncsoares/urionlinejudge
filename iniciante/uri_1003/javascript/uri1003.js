/**
 * Descrição da questão
 * 
 * https://www.urionlinejudge.com.br/judge/pt/problems/view/1003
 */

const input = require('fs').readFileSync('stdin', 'utf8');
const values = input.split('\n');

let [x, y] = values;
x = parseInt(x);
y = parseInt(y);

const sum = x + y;

console.log('SOMA = ' + sum);