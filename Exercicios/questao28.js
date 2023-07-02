/*Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares. */

let vetInt =[1, 2, 3, 4, 5, 6, 767 ]
let impar = 0
let par = 0

for (let i = 0; i < vetInt.length; i++){
    const printNum = (num) =>{
        if(num%2 ==0){
            par ++
        }else{
            impar ++
        }
    }
    printNum(vetInt[i])
}

console.log(`Entre os valores ${vetInt}, temos ${par} pares e ${impar} impares.`)