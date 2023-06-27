/**
Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano       Aumento
A           10%
B           15%
C           20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.

 */

const novoSalario = (plano, salario)=>{
    switch(plano.toUpperCase()){
        case 'A':
            return `Seu salário é ${salario} e seu novo salário será: ${salario +(salario*0.1)} através do plano ${plano.toUpperCase()}  `
        case 'B':
            return `Seu salário é ${salario} e seu novo salário será: ${salario +(salario*0.15)} através do plano ${plano.toUpperCase()}  `
        case 'C':
            return `Seu salário é ${salario} e seu novo salário será: ${salario +(salario*0.2)} através do plano ${plano.toUpperCase()}  `
        
    }return `Erro... Valores não correspondem ao esperado.`
}

console.log(novoSalario('a', 1000))
console.log(novoSalario('b', 1000))
console.log(novoSalario('c', 1000))
console.log(novoSalario('d', 1000))
