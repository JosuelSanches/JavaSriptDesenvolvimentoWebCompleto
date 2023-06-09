let valor // nao inicializada
console.log(valor)
valor = null// ausencia de valor
console.log(valor)
// console.log(valor.toString()) // erro!
const produto ={

}
console.log(produto.preco)

produto.preco = null // evite atribuir undefined// este produto esta sem preco
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

