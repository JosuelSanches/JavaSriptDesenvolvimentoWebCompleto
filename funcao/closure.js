//Closure é o escopo criado quando uma funcao é declarada
// Esse escopo permite com que a funcao possa acessar e manipular variaveis externas à função

// contexto lexico em acao!

const x = 'global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())