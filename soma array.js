let array1 = [2, 4, 1]
let array2 = [7, 2, 1]
let array3 =[2, 523, 23, 12]
let soma = 0

for(let i=0; i<array1.length; i++){
    console.log(array1[i] + array2[i])
}

console.log("----")

for(let j=0; j<array3.length; j++){
soma = soma + array3[j]
}

console.log("A soma de todos os números é " + soma)

