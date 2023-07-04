/*Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.
 */
let nums = [-9, 9, 52, -2, -92, 67, -45, -3, 3, 7]
numsNeg = 0
const negativos = (valor) => {
    if (valor < 0){
        numsNeg++
    }

}

nums.forEach(negativos)
console.log(nums)
console.log(numsNeg)