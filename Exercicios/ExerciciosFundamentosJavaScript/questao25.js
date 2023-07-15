/*A fim de criar um mecanismo de busca para sua aplicacao, voce precisa iniciar criando uma funcao
para identificar palavras semelhantes.
Escreva esta funcao que recebe como primeiro parametro uma palavra e, como segundo parametro, 
um array de strings. A funcao devera filtrar as palavras do array que contem nelas a 
string do primeiro parametro. */
const buscaPalavras = (busca, em)=>{
    return em.filter(palavra => palavra.includes(busca))
    /*let igual = 0
    let palavras =[]
    for(let j in em){
        for(let i in busca){
            if(busca[i] == em[j][i]){
                igual += 1
                if(igual == busca.length){
                    palavras.push(em[j])
                    igual = 0
                }
            }

        }
    } return palavras*/
}
let palavras = [`programacao`,`mobile`, `proficional`, `pro` ]
console.log(buscaPalavras(`pro`, palavras))