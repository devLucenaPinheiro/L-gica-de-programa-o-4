const lista = [1, 3, 3, 1, 3, 2, 1, 4, 4] //declara uma lista 
let num =(prompt("Digite um número")) //pede o número (que vai ser utilizado para ser manipulado na função)

const listaFiltrada = lista.filter(num1 => num != num1)


let k = listaFiltrada.length // K vai ser apenas utilizado para falar quantos números sobraram

const removidos = lista.length - k //removidos vai dizer quantos foram removidos

console.log("A lista filtrada é: " + listaFiltrada) //faz os resultados aparecerem na tela
console.log("A quantidade de números que sobrou foi " + k) //faz os resultados aparecerem na tela
console.log("E a quantidade de números removidos foi de: " + removidos) //faz os resultados aparecerem na tela