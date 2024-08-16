let numero = parseInt(prompt("Digite um número:"));

if (isNaN(numero) || numero <= 0) {
  document.write("Por favor, insira um número válido.");
} else {
  for (let i = 1; i <= numero; i++) {
    document.write('*'.repeat(i) + "<br>");
  }
}