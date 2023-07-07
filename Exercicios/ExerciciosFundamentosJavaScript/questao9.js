/*Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá,
enquanto que o segundo será o número de vezes que haverá repetição. Um array será retornado. */

const rept = (elemento, repetição)=>{
    let result = []
    for(let i = 0; i < repetição; i++){
        result.push(elemento)
    }return result
}

console.log(rept('Cametá',4))