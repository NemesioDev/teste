const nome = ['Nemésio', 'Angelo', 'Oliveira'];

// for (let i = 0; i < nome.length; i++) {
//     console.log(nome[i]);
// }


// retorno o indice ou chave
// for (let i in nome) {
//     console.log(nome[i]);
// }

// percorre e mostra o valor de fato sem precisar de indice
for (let valor of nome) {
    console.log(valor);
}

nome.forEach(function(valor, indice) {
    console.log(valor, indice);
})

