const lista = ["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"]
let dia = new Date()

dia = dia.getDay()

console.log("Hoje é " + lista[dia])