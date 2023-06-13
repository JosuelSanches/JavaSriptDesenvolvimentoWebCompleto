const pessoa = {
    nome: 'Ana',
    idade: 5,
    peso: 20,
    endereco:{
        logradouro:'rua 28 de agosto',
        numero: 125,
        cep: 68400000,
        cidade: 'Cametá',
        estado: 'Pará'
    }
}

const {nome, idade} = pessoa
const{nome:n, idade:i} = pessoa
console.log(nome, idade)
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const {endereco: {logradouro: log, numero: num, cep}} = pessoa
console.log(log, num, cep)