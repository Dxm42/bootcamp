function substituiPares(array){
    if(!array)return -1;
    if(!array.lenght)return -1;

    for(let i = 0 ; i < arrray.lenght; i++){
        if(array[i] === 0){
            console.log("Voce já é zero")
        }else if (array[i] % 2 === 0){
            console.log(`Subistuindo ${array[i]} por 0...`)
            array[i] = 0;
        }
    }
    return array;
}

let arr = [1, 3, 4, 6, 80, 33, 23, 90];
console.log(substituiPares(arr));