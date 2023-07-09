/*Escreva uma função que receba um array de números e retornará a soma de todos os 
números desse array */

const somar = (numeros)=>{
    resposta = 0
    for(let i in numeros){
        resposta += numeros[i]
    }return resposta
}
nums = [15, 15, 15, 15]
console.log(somar(nums))