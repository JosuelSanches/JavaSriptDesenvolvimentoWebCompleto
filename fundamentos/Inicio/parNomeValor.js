// par nome/valor
const saudacao = 'Olá' // contexto lexico 1
function exec(){
    const saudacao = "Falá" // contexto lexico 2
    return saudacao
}
// objetos sao grupos aninhados de pares nome/valor
const Cliente = {
    nome: 'pedro',
    idade: 32,
    peso: 90,
    endereco:{
        logradouro:'rua 28 de agosto',
        numero: 125,
        cep: 68400000,
        cidade: 'Cametá',
        estado: 'Pará'
    }
}
console.log(saudacao)
console.log(exec())
console.log(Cliente)