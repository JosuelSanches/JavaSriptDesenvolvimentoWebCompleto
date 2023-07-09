/*Elabore uma função que receba um array de números e retorne um array
que tenha todos os números que são pares e que tenham índices pares. */

const soPares = (numeros)=>{
    let pares = []
    for(let i in numeros){
        if (numeros[i]%2 === 0){
            pares.push(numeros[i])
        }
    }return pares
}

let valores = [1, 2, 9, 10, 80, 98, 23, 52, 6722, 1000]

console.log(soPares(valores))