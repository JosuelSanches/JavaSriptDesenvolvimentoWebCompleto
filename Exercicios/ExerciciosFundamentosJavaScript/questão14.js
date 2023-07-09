/*Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays,
em que cada elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto.
Observe os exemplos abaixo para um melhor entendimento: */
const objetoParaArray = (a) =>{
    let voltar = []
    for(let i in a){
        voltar.push([i, a[i]])
    }
    return voltar

}
 let pessoa = {
    nome: 'Josuel',
    idade: 26,
    altura: 170,
    sobrenome: 'Sanches',
    cidade: 'Cameta'
 }
 console.log(objetoParaArray(pessoa))