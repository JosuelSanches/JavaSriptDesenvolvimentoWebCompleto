const escola = [{
    nome: 'Turma m1',
    alunos:[{
        nome: 'Gustavo',
        nota: 9.1
    }, {
        nome: 'Anna',
        nota: 9.3
    }]
}, {
    nome: 'Turma m2',
    alunos:[{
        nome: 'Rebeca',
        nota: 8.9
    },{
        nome: 'Jamily',
        nota: 7.3
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)