const input = require('fs').readFileSync('stdin', 'utf8');
const values = input.split('\n');

let [sphereRadius] = values;
const pi = 3.14159;
const fourDividedByTree = (4.0 / 3);

const sphereVolume = (fourDividedByTree * pi * Math.pow(sphereRadius, 3));
const decimalPlaces = 3;
const sphereVolumeView = Number(sphereVolume).toFixed(decimalPlaces);

console.log('VOLUME = ' + sphereVolumeView);