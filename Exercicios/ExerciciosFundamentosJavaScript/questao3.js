/*
Desenvolva uma função que recebe dois parâmetros, um é a quantidade de 
horas trabalhadas por um funcionario num mês, e o quanto ele recebe por hora.
O retorno da função deve ser a string""Salario igual a R$ x"
 em que x é o quanto o funcionario ganhou no mês.  */

 const salario = (horas, valorHora)=> `Salário igual a R$ ${valorHora*horas}.`
 console.log(salario(220, 10))
