/*Crie uma funcao que recebe um array de numeros e retorna o segundo maior numero
presente nesse array. */

let numeros = [1, 3, 8, 90, 37, 70, 12]
const maior = Math.max(...numeros)
numeros = numeros.filter(num => num != maior)
const segMaior = Math.max(...numeros)
console.log(`O segundo maior numero é ${segMaior}` )