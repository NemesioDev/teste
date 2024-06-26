const nome = 'Nemésio';
const sobrenome = 'Angelo';
const idade = 24;
const peso = 81;
const alturaEmCm = 1.75;
let imc;
let anoDeNascimento;

imc = peso / (alturaEmCm * alturaEmCm);
anoDeNascimento = 2024 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${alturaEmCm} de altura, e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoDeNascimento}` );
