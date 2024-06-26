// FUNÇÃO
// function criaPessoas(nome, sobrenome, idade) {
//    return {
//     nome,
//     sobrenome,
//     idade
//    };
// }

// const pessoa1 = criaPessoas('Nemésio', 'Angelo', 24);
// const pessoa2 = criaPessoas('Nilciane', 'silva', 26);
// const pessoa3 = criaPessoas('joao', 'oliveira', 28);
// const pessoa4 = criaPessoas('maria', 'sousa', 22);
// const pessoa5 = criaPessoas('lucas', 'barros', 29);

// console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade)

// OBJETO COM FUNÇÃO DENTRO
const pessoal = {
    nome: 'Nemésio',
    sobrenome: 'Angelo',
    idade: 24,

    fala() {
        console.log(`A idade do ${this.nome} é: ${this.idade}`);
    },

    incremento() {
        this.idade++;
    }


}

pessoal.fala();
pessoal.incremento()
pessoal.fala()