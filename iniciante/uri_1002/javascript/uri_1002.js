/**
 * Descrição:
 *
 * https://www.urionlinejudge.com.br/judge/pt/problems/view/1002
 */

const input = require('fs').readFileSync('stdin', 'utf8');
const values = input.split('\n');
const pi = 3.14159;

let [raio] = values;
raio = parseFloat(raio);

const area = Number(pi * Math.pow(raio, 2)).toFixed(4);

console.log("A=" + area)