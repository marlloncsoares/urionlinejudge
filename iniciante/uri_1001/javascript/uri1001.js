/**
 * Descrição:
 * https://www.urionlinejudge.com.br/judge/pt/problems/view/1001
 */
const input = require('fs').readFileSync('stdin', 'utf8');
const values = input.split('\n');

let [a, b] = values;

a = parseInt(a);
b = parseInt(b);
const sum = a + b;

console.log("X = " + sum);