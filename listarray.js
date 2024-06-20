let nick = prompt("Digite o seu nome")

console.log(nick)


let nomes = ["João","Vinícius","Rodrigo","Arthur"] //sintaxe literal

let names = new Array("João","Vinícius","Rodrigo","Arthur") // sintaxe função construtora


for(let i = 0; i < 4; i++){
    document.write("Nome: " + names[i] + "<br>")
}

console.log(names)