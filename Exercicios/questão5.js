/**
 * Lidar com números em JavaScript pode dar muita dor de cabeça.
 * Voçê viu o que acontece oquando faz o seguinte comando no console:
 * console.log(0.1 + 0.2); 
 * O resultado será: 0.3000000000004.
 * Outra coisa importante de observar, é o fato que o ponto é utilizado no lugar da virgula 
 * e vice versa.
 * Com isso, vamos fazer um exercicio simples para mostrar dinheiro sempre da forma correta.
 * Desenvolva uma função javaScript para que ela receba um valor como 0.3000000000004 e retorne R$0,30
 * (observe a virgula e o ponto)
 */

const mudarReal =(a)=>{
    a = a.toFixed(2).toString().replace('.', ',')
    console.log(a)
}
mudarReal(0.3000000000004)