/**
O cardápio de uma lanchonete é o seguinte:

Código          Descrição do Produto                Preço
100             Cachorro Quente                     R$ 3,00
200             Hambúrguer Simples                  R$ 4,00
300             Cheeseburguer                       R$ 5,50
400             Bauru                               R$ 7,50
500             Refrigerante                        R$ 3,50
600             Suco                                R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade
 e calcule o valor a ser pago por aquele lanche. 
Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.

 */

const totalAPagar = (cod, quant)=>{
    switch(cod){
        case 100:
                return `Voçê pediu CACHORRO QUENTE, na quantidade de  ${quant}, custará R$ ${(quant * 3.00).toFixed(2)}.`
                break
    
        case 200:
                return `Voçê pediu HAMBURGUER SIMPLES, na quantidade de  ${quant}, custará R$ ${(quant * 4.00).toFixed(2)}.`
                break
    
        case 300:
                return `Voçê pediu CHEESEBURGUER, na quantidade de  ${quant}, custará R$ ${(quant * 5.50).toFixed(2)}.`
                break
    
        case 400:
                return `Voçê pediu BAURU, na quantidade de  ${quant}, custará R$ ${(quant * 7.50).toFixed(2)}.`
                break
    
        case 500:
                return `Voçê pediu REFRIGERANTE, na quantidade de  ${quant}, custará R$ ${(quant * 3.50).toFixed(2)}.`
                break
    
        case 600:
                return `Voçê pediu SUCO, na quantidade de  ${quant}, custará R$ ${(quant * 2.80).toFixed(2)}.`
                break
    } return `Não vendemos isto aqui! valor invalido.`

}
console.log(totalAPagar(100, 3))
console.log(totalAPagar(200, 3))
console.log(totalAPagar(300, 3))
console.log(totalAPagar(400, 3))
console.log(totalAPagar(500, 3))
console.log(totalAPagar(600, 3))
console.log(totalAPagar(700, 3))