/*Criando uma função semelhando ao filter */
Array.prototype.filter2 = function(callback){
    let result = []
    for (let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
         result.push(this[i])
        }
    }
    return result
}

const produtos = [
    {nome: 'Notebook', preco: 3500, fragil: true},
    {nome: 'Ipad pro', preco: 5600, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'copo de plastico', preco: 8, fragil: false},
    {nome: 'Impressora', preco: 1500, fragil: true},
    {nome: 'Caixa de som', preco: 2500, fragil: true},
    {nome: 'Mouse', preco: 70, fragil: true},
    {nome: 'MacBook', preco: 13500, fragil: true},
]
const fragil = (p)=>{
    return p.fragil
}
const caro = (p)=>{
    return p.preco >= 500
}

console.log(produtos.filter2(caro).filter2(fragil))