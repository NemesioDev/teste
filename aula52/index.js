const nome = 'Nemésio';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Angelo';
    falaNome();
}

usaFalaNome();