// function hoisting
falaOi();
function falaOi() {
    console.log('Oi');
}

// function expression
const souUmDado = function() {
    console.log('Sou um dado.');
};
souUmDado();

// Arrow Function
const funcaoArrow = () => {
    console.log('Sou uma arros function')
}

//funcão dentro de um Objeto
const obj = {
    falar() {
        console.log('Estou falando...');
    }
};

obj.falar();