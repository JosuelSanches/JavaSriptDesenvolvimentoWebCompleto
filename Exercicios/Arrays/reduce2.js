const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: false},
    {nome: 'João', nota: 9.8, bolsista: false},
    {nome: 'João', nota: 8.7, bolsista: false}
]

/* Desafio 1:
Todos os alunos são bolsistas?
 */
const allBolsista = alunos.map(a => a.bolsista).reduce(function(acumulador, atual){
    return acumulador && atual
})

/*Desafio 2:
Algum aluno é bolsista?
 */
const someBolsista = alunos.map(a => a.bolsista).reduce(function(acumulador, atual){
    return (acumulador + atual) > 0
})

console.log(allBolsista)
console.log(someBolsista)
