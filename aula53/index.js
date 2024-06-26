function retornaFuncao(nome) {
    return function() {
        return nome;
    }
}

const funcao = retornaFuncao('Nemésio');
const funcao2 = retornaFuncao('Nilciane');

console.log(funcao);
console.log(funcao2);
console.log(funcao());
console.log(funcao2());