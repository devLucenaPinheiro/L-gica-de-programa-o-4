let array = [2, null, 4, 1, "oi", false, 3, 7, true]

let soma = 0

for(i=0;i<array.length;i++){

    let n = array[i]
    if(typeof n === "number"){
        soma = soma + n
    }

}

console.log(soma)