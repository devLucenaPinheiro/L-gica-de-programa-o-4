let numero = parseInt(prompt("Digite um número:"));

if (isNaN(numero) || numero <= 0) {
  document.write("Por favor, insira um número válido.");
} else {
  for (let i = 1; i <= numero; i++) {
    let linha = '' + "<br>";
    for (let j = 1; j <= i; j++) {
      linha += '*';
    }
    document.write(linha);
  }
}


