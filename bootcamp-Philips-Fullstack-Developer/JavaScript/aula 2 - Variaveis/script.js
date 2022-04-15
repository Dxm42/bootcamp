/* tipos primitivos */

/* boolean */
var vouf =false;
console.log(typeof(vouf));

/* number */
var numeroQualquer = 1 ;
console.log(typeof(numeroQualquer));

/* string */
var nome = 'lucas'
console.log(typeof(nome));

// function
var funcao = function() {}
console.log(typeof(funcao));

// como declarar
var variavel = 'lucas';
variavel = 'santos';
console.log(variavel);

let variavel2 = 'lucas';
variavel2 = 'santos';
console.log(variavel2);

const constante = 'lucas';
console.log(constante);

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal(){
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}
escopoLocal();

// atribuicao 

var atribuicao = 'lucas';

// comparacao
var comparacao = '0' == 0;
console.log(comparacao);

//comparacao identica

var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

// adicao
var adicao = 1 + 1;
console.log(adicao);

//subtracao
var subtracao = 2 - 1;
console.log(subtracao);

// multiplicacao
var multiplicacao = 2 * 2 ;
console.log(multiplicacao);

//divisao real 
var divisao = 6 / 2;
console.log(divisao);

// divisao inteira / ou resto da divisao
var divisaoIteira = 5 % 2;
console.log(divisaoIteira);

// potenciacao
var potenciacao = 2 ** 10;
console.log(potenciacao);

// maior que 
var maiorQue = 5 > 2;
console.log(maiorQue);

// menor que 
var menorQue = 5 < 2;
console.log(menorQue);

// maior ou igual a 
var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

// menor ou igual a 
var menorOuIgual = 5 <= 2;
console.log(menorOuIgual);

// operadores logicos 

var e = true && true;
console.log(e);

var ou = true || false;
console.log(ou);

var nao = !true;
console.log(nao);