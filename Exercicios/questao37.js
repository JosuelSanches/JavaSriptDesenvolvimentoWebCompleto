/*Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica 
que recebam como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) 
e escreva os n termos, bem como a soma dos elementos.
 */

let progressaoAritmetica = (n, a1, r)=>{
    let result =[]
    while(n>0){
        if(result.length === 0){
        result.push(a1)
        }else{
            result.push(a1 + r)
            a1 = a1 + r
        }
        n--
    }
    return result

}

console.log(`A Progressão aritmética com 11 posições, iniciando em 05, de 5 em 5 é: ${progressaoAritmetica(11, 50, 5)}`)