let num =[1, 7, 2, 8, 13, 57]
let num2x =[]

for(let i = 0; i < num.length; i++){
    console.log(num[i] * 2)

    //num2x = [num2x.length] = num
    num2x.push(num, "alou", false) //Método push "empurra" um novo valor no final do array
}
console.log(num2x)



console.log("Fim do loop")
