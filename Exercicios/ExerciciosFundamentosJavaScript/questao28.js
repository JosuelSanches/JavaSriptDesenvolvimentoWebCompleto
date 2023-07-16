/*Elabore uma funcao que receba dois parametros:
o primeiro e um array de numeros e o segundo e um numero
que especifica a quantidade de digitos.
Essa fumcao devera retornar apenas aqueles numeros 
do array que tem a quantidade de digitos indicadas pelo segundo parametro. */
let numeros = [1, 19, 29, 9, 0, 711, 28, 200]
const numsDesejados = (numbers, quantCasasDec)=>{
    let resultado = []
    numbers.filter(num => {
        if((String(num).length) === quantCasasDec){
            resultado.push(num)
        }
    })
    return resultado
}

/*const quantDig = (nums, num)=>{
    let resultado =[]
    for(let n of nums){ 
        if((String(n).length) === num){
            resultado.push(n)
        }

    }

    return resultado
}*/ 
console.log(numsDesejados(numeros, 2))