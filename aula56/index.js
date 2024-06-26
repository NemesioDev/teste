function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
           
        },

        fala(assunto = 'falandosobre nada') {
            return `${this.nome} está ${assunto}.`;
        },

        altura: a,
        peso: p,
        // Getter
        get imc() {
            const indice = this.peso / (this.altura * this.altura);
            return indice.toFixed(2);
        }
    }
}

const p1 = criaPessoa('Nemésio', 'Angelo', 1.8, 80);
// console.log(p1.fala('falando sobre NodeJS'));
// console.log(p1.imc)
p1.nomeCompleto = 'Maria Oliveira cruz'
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.fala())
// const p2 = criaPessoa('Nilciane', 'Castro', 1.6, 74);
// console.log(p2.fala('falando sobre JS'));
// console.log(p2.imc)