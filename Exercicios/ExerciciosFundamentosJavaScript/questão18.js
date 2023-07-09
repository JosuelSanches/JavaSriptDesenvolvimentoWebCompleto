/*Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal 
dessa aplicação, é possivel adicionar produtos ou serviços, informando nome, categoria e preço.
Uma funcionalidade que você está desenvolvendo no momento é a de somar o total das despesas.
Crie uma função que receba um array de produtos e retorne o total das despesas.*/

let despesas = [
    {nome: "Jornal online", categoria: "Informação", preco: 80.00},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150},
    {nome: 'JBL Boobox3', categoria: "Caixa de som", preco: 2550}
]

let depesasTotais = (despesas)=>{
    let resposta = 0
    for(let i in despesas){
            resposta += despesas[i].preco
    }return resposta
}
console.log(depesasTotais(despesas))