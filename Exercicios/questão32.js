/* Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
 */
let nums = [10, 3, 230, 4, 5, 80, 89, 100, 76]

let media = 0
let soma = (num) => media = media +num

nums.forEach(soma)
media = media/ nums.length

console.log(`A média entre os numeros ${nums} é: ${media}.`)