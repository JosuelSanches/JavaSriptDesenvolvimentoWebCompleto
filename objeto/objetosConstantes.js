/* A constante aponta para o endereco de memoria onde o objeto se encontra.
Entao vc pode mudar o objeto, mas nao pode mudar o endereco de memoria,
caso vc tente fazer com que essa constante aponte para outro objeto falhará miseralvelmente*/

const pessoa = {nome: "Joao"}
pessoa.nome = 'Pedro'
console.log(pessoa)

/**
 * pessoa -> 423 -> {...}
 * pessoa = {nome: 'ana'} // Isso nao vai funcionar porque a constrante
 * ja aponta para outro endereco de memoria.
 */

Object.freeze(pessoa)
pessoa.nome = 'Maria'
console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Joao'})
console.log(pessoaConstante)