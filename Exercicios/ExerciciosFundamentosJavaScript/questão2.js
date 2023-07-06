/*Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias */
/*
Obs: Considere que um ano tem 365 dias. Desconsiderando anos bissextos(com 366 dias) 
e desconsidere também dias decorridos desde o último aniversário. 
 */

const idadeEmDias = (idade) => idade*365

console.log(`Esta pessoa tem 90 anos que sao: ${idadeEmDias(89)} dias.`)