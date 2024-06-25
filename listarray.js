let nick = prompt("Digite o seu nome")

console.log(nick)


let nomes = ["João","Vinícius","Rodrigo","Arthur"] //sintaxe literal

let names = new Array("João","Vinícius","Rodrigo","Arthur","Marco","Claudinê", nick) // sintaxe função construtora

names[17] = "lá ele"

names[80] = names

for(let i = 0; i < names.length; i++){
    document.write("Nome: " + names[i] + "<br>")
}

nothing

console.log(names)

console.log(typeof(names[17]))