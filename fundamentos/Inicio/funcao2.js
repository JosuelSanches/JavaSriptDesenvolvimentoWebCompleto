// armazenando uma funcao em uma variavel
const imprimirSoma = function(a =0, b=0){
    console.log(a+b)
}

imprimirSoma(1,2)

// Armazenando uma funcao arrow em uma variavel
 const soma =(a, b) => {
    return a + b 
 }
 console.log(soma(2, 3))
// retorno implicito
const subtracao =(a=0, b=0)=> a - b
console.log(subtracao(9,2))

const imprimir2  = a => console.log(a)
imprimir2('Que maneiro, que legal!')