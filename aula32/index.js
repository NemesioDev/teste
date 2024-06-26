// DESESTRUTURAÇÃO VIA ARRAYS
const numeros = [100, 200, 300, 400, 500, 600, 700];
const [um, , tres, , cinco, ...resto] = numeros

console.log(um, tres, cinco, resto) 

const numeros2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(numeros2[2][2])