const fs = require('fs');
const input = fs.readFileSync('stdin', 'utf8');
const values = input.split('\n');

let [seconds] = values;
seconds = parseInt(seconds);

const totalOfHours = parseInt(seconds / 3600);
seconds -= (totalOfHours * 3600);

const totalOfMinutes = parseInt(seconds / 60);
const totalOfSeconds = seconds - ((totalOfMinutes * 60));

console.log(`${totalOfHours}:${totalOfMinutes}:${totalOfSeconds}`);
