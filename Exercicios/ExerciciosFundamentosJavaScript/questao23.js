/* Criar uma funcao que receba uma string como parametro e conte quantas palavaras tem nela*/
const countWords = (words)=>{
    let count = 0
    for (let i in words){
        if (words[i] == ` `){
            count += 1
        }
    } return count + 1
}
let words = `Sou uma frase`
console.log(`A frase (${words}) tem ${countWords(words)} palavras.`)
