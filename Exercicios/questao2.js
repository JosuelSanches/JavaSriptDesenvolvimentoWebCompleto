/**
 * Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
 * Equilátero: Os tres lados são iguais. 
 * Isósceles: Dois lados iguais. 
 * Escaleno: Todos os lados são diferentes.
 * 
 * Crie uma função que recebe os comprimentos dos três lados de um triângulo
 * e retorne a sua classificação quanto ao tamanho de seus lados.
 * (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triangulo)
 */

const tipoTriangulo = (a, b, c)=>{
    if(!!Number.isInteger(a) && !!Number.isInteger(b) && !!Number.isInteger(c)){
    if(a == b && b == c){
        console.log(`O suposto triângulo formado pelos numeros ${a}, ${b} e ${c} é equilatero`)
    }else if(a == b || a == c || c == b){
        console.log(`O suposto triângulo formado pelos numeros ${a}, ${b} e ${c} é isósceles`)
    }else if(a != b && a != c && b != c){
        console.log(`O suposto triângulo formado pelos numeros ${a}, ${b} e ${c} é escaleno`)
    }
}else{
        console.log(`Os valores são invalidos...`)
    }
}

tipoTriangulo(2,2,2)
tipoTriangulo(2,3,2)
tipoTriangulo(1,2,3)
tipoTriangulo(0, 'u', 8)
