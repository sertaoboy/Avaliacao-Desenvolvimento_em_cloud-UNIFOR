// app.js
const calculadora = require('./calculadora');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function iniciarCalculadora() {
    readline.question('Insira um valor: ', (x) => {
        readline.question('Insira outro valor: ', (y) => {
            console.log(calculadora.soma(x, y));
            console.log(calculadora.subtracao(x, y));
            console.log(calculadora.multiplicacao(x, y));
            console.log(calculadora.divisao(x, y));
            readline.close();
        });
    });
}

module.exports = iniciarCalculadora;