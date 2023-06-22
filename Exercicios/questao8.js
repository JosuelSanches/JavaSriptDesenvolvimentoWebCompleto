/**
 *  Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. 
Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, 
escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
 */

const point = (pontos)=>{
    let recorde = 0
    let pior = 0
    let numPior =0
    let numRecorde = []
    for(let i = 0; i <pontos.length; i++ ){
        if(i == 0 || pontos[i] > recorde  ){
            recorde=pontos[i]
            numRecorde.push(pontos[i])
            if(i == 0){
                pior = pontos[i]
                numPior = i
            }
        }else if(pontos[i] < pior){
            pior = pontos[i]
            numPior = i
        }
    }
    return tabela={
        numPior,
        numRecorde

    }
}

let pontos = [10, 2, 30, 90, 5, 9, 3]
console.log(pontos)
let mostrar = point(pontos)
console.log(`A sua pior pontuação foi no ${mostrar.numPior}º jogo e os seus recordes foram
 ${mostrar.numRecorde.pop(0)} desde o primeiro jogo bateu o recorde ${mostrar.numRecorde.length-1} vezes.`)