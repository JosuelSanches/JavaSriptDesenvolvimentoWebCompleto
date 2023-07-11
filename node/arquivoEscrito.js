const fs = require ('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15,
    modelo: 'Samsung Galaxy a53'
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err =>{
    console.log(err || 'Arquivo salvo!')
})