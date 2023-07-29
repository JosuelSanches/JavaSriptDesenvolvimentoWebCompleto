/*Elabore uma funcao que recebe um objeto com estudantes e suas notas.
As notas de cada estudando estarão num array, conforme exemplo abaixo.
Voce deverá calcular a media da nota de cada aluno e retorna um objeto
com os atributos nome e media, que indica o aluno que teve o melhor desempenho
nas notas. */

let alunos = [
    {
        nome: 'Joao',
        notas: [8, 7.6, 8.9, 6]
    },
    {
        nome: "Mariana",
        notas: [9, 6.6, 7.9, 8]
    },
    {
        nome: "Carla",
        notas: [7, 7, 8, 9]
    }
]

const soma = array => array.reduce((acumulador, atual) => acumulador + atual, 0)
const media = array => soma(array) / array.length
function recerberMelhorEstudante(estudantes) {
    const estudantesComMedias = Object.entries(estudantes).map(estudante => {
        const chave = 0,
            valor = 1
        return { nome: estudante[chave], media: media(estudante[valor]) }
    })
    const estudantesOrdenados = estudantesComMedias.sort((estudanteA, estudanteB) => estudanteB.media - estudanteA.media)
    const melhorEstudante = estudantesOrdenados[0]
    return melhorEstudante
}

console.log(recerberMelhorEstudante(alunos))