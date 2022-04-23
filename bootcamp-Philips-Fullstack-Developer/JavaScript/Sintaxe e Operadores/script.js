function compararNumeros (n1, n2,){
    const primeiraFrase = criaprimeiraFrase(n1, n2);
    const segundaFrase = criarSegundaFrase (n1 ,n2);

    return `${primeiraFrase} ${segundaFrase}`
}

function criaprimeiraFrase(n1 ,n2){
    let saoIguais = '';

    if(n1 !== n2){
        saoIguais = 'não';
    }
    return `os numeros ${n1} e ${n2} ${saoIguais} são iguais.`
}

function criarSegundaFrase(n1 ,n2){
    const soma = n1 + n2;

    let resultado10 = 'menor';
    let resultado20 = 'menos';
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if(compara10){
        resultado10 = 'maior';
    }
    
    if(compara20){
        resultado20 = 'maior';
    }
    return`Sua soma E ${soma}, que ${resultado10} que 10  e ${resultado20} 20.`
}
console,console.log(compararNumeros(20 ,20));


