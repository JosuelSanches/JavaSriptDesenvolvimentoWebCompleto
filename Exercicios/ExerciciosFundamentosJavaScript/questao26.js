/*Desenvolva uma funcao que receba uma string como parametro
e retorne essa string somente com as consoantes, ou seja, sem as vogais */
const soConsoantes = (palavra)=>{
    for(let i in palavra){
        palavra = palavra.replace(/[aeiou]/ig,"")
    }return palavra
    }


console.log(soConsoantes(`Josuel de souza sanches`))