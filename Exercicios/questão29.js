/* Utilizando a estrutura de repetição for, 
faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] 
(repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) 
e quantos deles estão fora do intervalo,
 escrevendo estas informações. */

let nuns =[12,23, 93, 10, 1, 3, 5, 8, 7, 65, 15, 18, 34, 17, 13, 16 ]
let fora = 0
let dentro = 0
let estaEntre = (num) => num >= 10 && num <= 20? dentro ++ : fora ++

for(let i = 0; i < nuns.length; i++){
    estaEntre(nuns[i])
}
console.log(`.Entre os numeros ${nuns} com ${nuns.length} valores. Temos ${dentro} numeros dentro do intervalo de 10 à 20 e ${fora} fora do intervalo de 10 à 20.`)