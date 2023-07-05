/*Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. 
Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro.
 A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.
 */
let newVector = (vetor, num)=>{
    retorno = []
    for(let i = 0; i < vetor.length; i++){
        retorno.push(vetor[i]*num)
    }
    return retorno
}
let result1 = newVector([1, 2, 3, 4, 5], 2)
let newVector2 = (vetor, num)=>{
    retorno = []
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] > 5){
            retorno.push(vetor[i]*num)
        }
    }
    return retorno
}
console.log(result1)
console.log(`${newVector2(result1, 2)}`)