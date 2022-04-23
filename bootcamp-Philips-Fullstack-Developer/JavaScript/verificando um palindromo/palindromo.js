// solução 1

function verificaPalindromo(string){
    if(!string)return "string inexistente";

    string.string("").reverse().join("") === string;
}

console.log(verificaPalindromo("ovo"));

// solucão 2

function verificaPalindromo(string){
    if(!string)return "string inexistente";

   for(let i =0; i < string.lenght / 2; i++){
        if(string[i] !== string[string.length - 1 - i]){
        return false;
        }
   }
   return false;
}