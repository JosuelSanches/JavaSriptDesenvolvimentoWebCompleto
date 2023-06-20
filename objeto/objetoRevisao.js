// Coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'cadeira'
produto ['Marca do produto'] = 'genérica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto ['Marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'josuel',
        sobrenome: 'Sanches',
        idade: 25,
        endereco: {
            logradouro: "rua 28 de agosto",
            numero: 214,
            bairro: "Castanhal",
            cidade: 'Cametá'
        }

    },
    condutores: [{
        nome: 'junior',
        idade: 19
    },{
        nome: 'ana',
        idade: 32
        }],
        calcularValorDoSeguro: function(){
            // ...
        }
}
console.log(carro)
carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Rua Gigante'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorDoSeguro

console.log(carro)
console.log(carro.condutores)