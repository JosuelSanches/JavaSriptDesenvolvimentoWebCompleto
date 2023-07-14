/*Desenvolva uma funcao que recebe um caractere e uma string como parametro e 
retorne o numero de vezes que o caractere se repete na string.
 A funcao devera ser case-sensitive, ou seja, ira diferenciar maiusculas de minusculas.*/
 const contarCaracter = (carac,word)=>{
    let quant = 0
    for(let i in word){
        if(word[i] == carac){
            quant += 1
        }
    }return quant
 }
 console.log(contarCaracter(`r`,`O rato roeu a roupa do rei de Roma`))