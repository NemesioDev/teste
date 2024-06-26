const pessoa = {
    nome: 'Nemésio',
    sobrenome: 'Angelo',
    idade: 30
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave])
}