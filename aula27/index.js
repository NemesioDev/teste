const pontuacaoUsuario = 500;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário nomral';

const corUsuario = null;
const corPadrao = corUsuario || 'preta';

console.log(nivelUsuario, corPadrao);