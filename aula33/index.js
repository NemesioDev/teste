const pessoa = {
    nome: 'Nemesio',
    sobrenome: 'Angelo',
    idade: 24,
    endereco: {
        rua: '15',
        numero: 92
    }
};

//const {nome, sobrenome,} = pessoa;
//console.log(nome, sobrenome);

const {endereco: {rua, numero}, endereco} = pessoa;
console.log(rua, numero, endereco)

const {nome, ...resto} = pessoa;
console.log(nome, resto);