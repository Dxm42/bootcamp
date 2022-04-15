// oque sao vetores ou arrays

// como declarar um array
/* let array = ['string', 1, true];
console.log(array); */

//pode guardar varios tipos de dados
/* let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(array[0]); */

/* // forEach
array.forEach(function(item, index){console.log(item, index)}); */

// adiciona item no final do array
/* array.push('novo item');
console.log(array); */

// remove item no final do array
/* array.pop();
console.log(array); */

// remove item no inicio do array
/* array.shift();
console.log(array); */

// adiciona item no inicio do array 

/* array.unshift('novo item no inicio');
console.log(array); */

// retorna o indice de um valor retorna a posicao do item no array
/* console.log(array.indexOf(true)); */

// remove ou subostitui um item pelo indice
/* array.splice(0, 3);
console.log(array);
 */

// retorna uma parte de um array exixtente

/* let novoArray = array.slice(0, 3);
console.log(novoArray); */

// object

let object = {string: 'string', number: 1, boolean: true, array: ["array"], objectInterno: {ObjectInterno:'obtectInterno'}};

/* console.log(object.Boolean);

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno); */

var { string, boolean ,ObjectInterno} = object;
console.log( string, boolean, objectIntern);