/*
Tipos primitivos (imutaveis) - string, number, booelan, undefined, null (bigint, symbol) - valores copiados

Referência (mútavel) - array, object, function - passados por referência

*/


const a = {
    nome: 'Nemésio',
    sobrenome: 'Angelo'

};

const b = a;

b.nome = 'Nil'
console.log(a)
console.log(b)