/*Crie uma função que receba um array de elementos e retorne um array somente 
com os números presentes no array recebido como parâmetro. */

const filtrarNumeros = (a)=>{
    let result = []
    for(let i = 0; i< a.length; i++){
        if(Number.isInteger(a[i])){
            result.push(a[i])
        }
    } return result
}
let lista = ['josuel', 1, '8', 90, 'não gosto de calor', 'voce gosta de pescar', 8, 12]
console.log(filtrarNumeros(lista))