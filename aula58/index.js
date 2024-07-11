// FUNÇÕES CONTRUTUROAS
function Pessoa(nome, sobrenome) {
    // ATRIBUTOS OU METODOS PRIVADOS
    const ID = 123456;
    const metodoInterno = function() {

    };

    // Atributos ou metodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um método');
    };

}

const p1 = new Pessoa('Nemésio', 'Angelo');
const p2 = new Pessoa('Nilciane', 'Castro');
p2.metodo();