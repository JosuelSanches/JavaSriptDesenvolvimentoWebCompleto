/*Desenvolva uma funcao que receba uma string como parametro
e retorne essa string somente com as consoantes, ou seja, sem as vogais */
const soConsoantes = (palavra)=>{
    for(let i in palavra){
        palavra = palavra.replace("a","")
        palavra = palavra.replace("e","")
        palavra = palavra.replace("i","")
        palavra = palavra.replace("o","")
        palavra = palavra.replace("u","")
    }return palavra
    }


console.log(soConsoantes(`Josuel de souza sanches`))