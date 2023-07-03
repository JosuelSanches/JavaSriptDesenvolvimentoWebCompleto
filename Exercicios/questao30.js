/*Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
 */

let nums = [10, 3, 230, 4, 5, 80, 89, 100, 76]
let maior = 0
let menor = 0
const maiorEMenor = (valor, indice) => {
    if(indice == 0){
        maior = valor
        menor = valor
    }else if (valor > maior){
        maior = valor
    }else if( valor < menor){
        menor = valor
    }
};

console.log(nums)
nums.forEach(maiorEMenor)
console.log(`O menor numero do array é ${menor} e o maior numero é ${maior}.`)