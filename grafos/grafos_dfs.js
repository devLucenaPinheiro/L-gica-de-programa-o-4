let grafo = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
};

function dfs(grafo, inicio) {
    let visit = new Set();
    let pilha = [inicio];
    while (pilha.length > 0) {
        let vert = pilha.pop();

        if (!visit.has(vert)) {
            console.log(vert);
            visit.add(vert);

            let vizinhos = grafo[vert];
            for (let vizinho of vizinhos) {
                if (!visit.has(vizinho)) {
                    pilha.push(vizinho);
                }
            }
        }
    }
}

console.log('Busca em Profundidade a partir do vértice D:');
dfs(grafo, 'D');