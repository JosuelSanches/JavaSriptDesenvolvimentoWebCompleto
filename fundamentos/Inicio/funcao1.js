// funcao sem retorno

function imprimirSoma(a,b){
    console.log(a+b)
}
imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 3, 4, 5)
imprimirSoma()

// funcao com retorno
function soma(a=0, b =0){
    return a + b
}

console.log(soma(2,3))
let resultado = soma(10, 19)
console.log(resultado)