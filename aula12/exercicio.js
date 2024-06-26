let varA = 'A';
let varB = 'B';
let varC = 'C';

const varTemp = varA; // ou [varA, varB, varC] = [varB, varC, varA]

varA = varB;
varB = varC;
varC = varTemp;

console.log(varA, varB, varC);