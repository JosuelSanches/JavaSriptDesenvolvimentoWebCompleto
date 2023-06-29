/**
 * Usando map faça uma função 
 * para retonar um array com 
 * somente o preço dos produtos.
 */

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
]
const paraObjeto = json => JSON.parse(json)
const soPreco = e => e.preco
let resultado = carrinho.map(paraObjeto).map(soPreco)
console.log(resultado)