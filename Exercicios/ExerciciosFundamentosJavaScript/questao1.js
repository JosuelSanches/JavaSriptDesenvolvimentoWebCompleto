/*Crie uma função que retorna a string "Olá, "
concatenada com um argumento text(A ser passado para a função) 
e com ponto de exclamação no final. */

const cumprimento = (nome)=>{
    nome = 'Olá, '.concat(nome, "!")
    return nome
}

console.log(cumprimento('Josuel'))