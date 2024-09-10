num = 3
lista = [1,2,3]

const listaFiltrada = lista.filter(function(num){
if(num !==3){
    return true
}
else{
    return false
}
})

console.log(listaFiltrada)