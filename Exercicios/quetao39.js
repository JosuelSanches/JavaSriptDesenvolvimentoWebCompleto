/*Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar.
 */
let vetorA = [1, 3, 5, 7, 8]
let vetorB = [0, 5, 2, 9, 10]

const troca = (num, num2)=>{
    if(num.length == num2.length){
    for(i =0; i < num.length; i++){
            num[i] = num[i]+ num2[i]
            num2[i] = num[i] - num2[i]
            num[i] = num[i] - num2[i]
    }console.log(vetorA, vetorB)
    }else{
        console.log("Os vetores são de tamanhos diferentes, então a troca não será possivel.")
    }
}

console.log(vetorA, vetorB)
troca(vetorA, vetorB)
