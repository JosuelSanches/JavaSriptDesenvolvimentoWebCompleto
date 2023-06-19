// criar produtos a partir de uma funcao factory

function criarProdutos(nome, preco, tipo){
    return {
        nome,
        preco,
        tipo
    }
}

console.log(criarProdutos('JBL Boombox3', 2.550, 'Speaker'))