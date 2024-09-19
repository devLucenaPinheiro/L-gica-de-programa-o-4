const labirinto = [
  [0, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 1, 0],
  [0, 1, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 1],
  [0, 0, 0, 1, 0, 0],
  [0, 1, 0, 1, 0, 0],
  [0, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0]]
  const mov = [
  [-1, 0], 
  [1, 0],  
  [0, -1], 
  [0, 1]]

function posicaoValida(x, y) {
  return x >= 0 && x < labirinto.length && y >= 0 && y < labirinto[0].length && labirinto[x][y] === 1
}
function dfs(x, y, caminho) {
  if ((y === labirinto[0].length - 1 || x === labirinto.length - 1) && labirinto[x][y] === 1) {
    caminho.push([x, y])
    return true
  }
  labirinto[x][y] = 2
  caminho.push([x, y])

  for (let [dx, dy] of mov) {
    let novoX = x + dx
    let novoY = y + dy

    if (posicaoValida(novoX, novoY)) {
      if (dfs(novoX, novoY, caminho)) {
        return true
      }
    }
  }
}
function encontrarCaminho() {
  const caminho = []
  if (dfs(0, 2, caminho)) { 
    return caminho
  } else {
    return "Caminho não encontrado"
  }
}
const resultado = encontrarCaminho()
console.log(resultado)