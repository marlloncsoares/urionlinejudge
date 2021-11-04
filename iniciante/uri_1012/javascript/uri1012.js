const input = require('fs').readFileSync('stdin', 'utf8');
const values = input.split('\n');

let [valueA, valueB, valueC] = values;

valueA = parseFloat(valueA);
valueB = parseFloat(valueB);
valueC = parseFloat(valueC);

const pi = 3.14159;
const triangleArea = (valueA * valueC / 2);
const circleArea = (pi * Math.pow(valueC, 2));
const trapezeArea = ((valueA + valueB) * valueC) / 2;
const squareArea = (valueB * valueB);
const rectangleArea = (valueA * valueB);

const decimalPlaces = 3;
const triangleAreaView = Number(triangleArea).toFixed(decimalPlaces);
const circleAreaView = Number(circleArea).toFixed(decimalPlaces);
const trapezeAreaView = Number(trapezeArea).toFixed(decimalPlaces);
const squareAreaView = Number(squareArea).toFixed(decimalPlaces);
const rectangleAreaView = Number(rectangleArea).toFixed(decimalPlaces);

console.log('TRIANGULO: ' + triangleAreaView);
console.log('CIRCULO: ' + circleAreaView);
console.log('TRAPEZIO: ' + trapezeAreaView);
console.log('QUADRADO: ' + squareAreaView);
console.log('RETANGULO: ' + rectangleAreaView);