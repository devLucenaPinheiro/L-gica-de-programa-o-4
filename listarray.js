let nick = prompt("Digite o seu nome")

console.log(nick)


let nomes = ["João","Vinícius","Rodrigo","Arthur"] //sintaxe literal

let names = new Array("João","Vinícius","Rodrigo","Arthur","Marco","Claudinê", nick) // sintaxe função construtora

names[17] = "lá ele"

for(let i = 0; i < names.length; i++){
    document.write("Nome: " + names[i] + "<br>")
}

console.log(names)