const fs = require('fs');
const input = fs.readFileSync('stdin', 'utf8');
const lines = input.split('\r\n');

let [n1, n2, n3, n4] = lines[0].split(' ').map(n => parseFloat(n));


let studentInExam = false;
const p1 = 2; 
const p2 = 3; 
const p3 = 4; 
const p4 = 1;
const average = ((n1 * p1) + (n2 * p2) + (n3 * p3) + (n4 * p4)) / (p1 + p2 + p3 + p4);

console.log(`Media: ${Number(average).toFixed(1)}`);

if (average >= 7) {
    console.log('Aluno aprovado.')
} else if (average < 5) {
    console.log('Aluno reprovado.')
} else {
    studentInExam = true;
    console.log('Aluno em exame.')
}

if (studentInExam) {
    const newN = parseFloat(lines[1]);
    
    console.log(`Nota do exame: ${Number(newN).toFixed(1)}`);
    const newAverage = (average + newN) / 2;

    if (newAverage >= 5) {
        console.log('Aluno aprovado.')
    } else {
        console.log('Aluno reprovado.')
    }
    console.log(`Media final: ${Number(newAverage).toFixed(1)}`);
}
