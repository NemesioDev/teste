function getDiaSemanaTexto (diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo'
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Segunda'
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Terça'
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quarta'
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Quinta'
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sexta'
            return diaSemanaTexto;
        case 7:
            diaSemanaTexto = 'Sabado'
            return diaSemanaTexto;
    
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;
            
    }


}

const data = new Date('1987-04-26 00:00:00');
let diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

console.log(diaSemana, diaSemanaTexto);