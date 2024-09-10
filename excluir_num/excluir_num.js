const lista = [1, 3, 3, 1, 3, 2, 1]
let num = 3

const listaFiltrada = lista.filter(num => num !==3)

let k = listaFiltrada.length

const removidos = lista.length - k



console.log("A lista filtrada é: " + listaFiltrada)
console.log("A quantidade de números que sobrou foi " + k)
console.log("E a quantidade de números removidos foi de: " + removidos)