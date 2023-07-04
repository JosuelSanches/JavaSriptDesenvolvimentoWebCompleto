/*Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console. */

let vetorInteiro= [1, 2, 3, 4]
let vetorString= ['josuel', 'daniela', 'fernanda', 'janayna']
let vetorDouble= [4.23, 4.5, 90.888, 302,899]

console.log(vetorInteiro.concat(vetorDouble, vetorString))
console.log(vetorString.concat(vetorDouble, vetorInteiro))

