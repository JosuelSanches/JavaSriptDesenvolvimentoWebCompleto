/**
 * Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica,
O programa recebe como parâmetros dois valores numéricos e uma string referente à operação
 e a realize com os valores numéricos na ordem que foram inseridos. 
Por exemplo: calculadora (2, ‘+’, 3). 
A função efetuará a soma de 2 e 3. 
Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. 

Crie um caso default para operações inválidas.

 */

const operação = (a,operando,b)=>{
    switch(operando){
        case '+':
            return `A soma entre ${a} e ${b} = ${a + b}`
            break
        case '-':
            return `A subtração entre ${a} e ${b} = ${a - b}`
            break
        case '*':
            return `A multiplicação entre ${a} e ${b} = ${a * b}`
            break
        case '/':
            return`A divisão entre ${a} e ${b} = ${a / b}`
            break
    }
    return `Entrada invalida!!! veja onde pode ter errado: ${a} ou ${operando} ou ${b}`

}

console.log(operação(2, '+', 3))
console.log(operação(2, '-', 3))
console.log(operação(2, '*', 3))
console.log(operação(2, '/', 3))
console.log(operação(2, '%', 3))