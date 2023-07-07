/*Desenvolva uma função que recebe dois números inteiros
não negativos (maiores ou iguais a zero) e realize a multiplicação deles. 
Porém, não utilize o operador de multiplicação. */
const multSemMult = (a,b)=>{
    let result = 0
    for(let i = 0; i < b; i++){
         result = a + result 
    }
    return result
}
console.log(multSemMult(5,5))