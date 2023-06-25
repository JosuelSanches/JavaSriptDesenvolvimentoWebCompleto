/**
 * Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console.

 */

const temFrutas = (fruta)=>{
    switch(fruta.toUpperCase()){
    case 'MAÇÃ':
        return `Não vendemos ${fruta} aqui!`
        break
    case 'KIWI':
        return `Estamos com escasez de ${fruta} aqui!`
        break
    case 'MELANCIA':
        return `Aqui está sua ${fruta}, são 3 reias o Kg!`
        break
} 
return `O valor inserido não é valido! ${fruta}`
}

console.log(temFrutas('manga'))