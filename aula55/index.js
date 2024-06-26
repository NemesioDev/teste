// FUNÇÕES IMEDIATAS
(function(idade, peso, altura) {

    const sobrenome = 'Angelo'
    function criaNome(nome) {
        return nome + ' ' + sobrenome;

    }

    function falaNome() {
        console.log(criaNome('Nemésio'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(24, 83, 1.75);