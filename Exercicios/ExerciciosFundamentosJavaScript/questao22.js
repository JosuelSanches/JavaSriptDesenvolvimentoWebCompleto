/*Desenvolva uma funcao que receba como parametro um numero de 1 a 10.
Internamente, na funcao, sera gerado um numero aleatorio de 1 a 10. 
A funcao devera retornar se o parametro de entrada foi igual ao numero
sorteado internamente. 
Se o valor fornecido foi sorteado, retorne "Parabens! O numero sorteado foi o X".
 */
const sorteio = (num)=> {
    let i = (Math.random()*11).toFixed(0)
    if(num ==i){
        return`Parabens! O numero sorteado foi ${i}`
    }else{
        return `Que pena! O numero sorteado foi ${i} e nao ${num}`
    }
}
console.log(sorteio(3))