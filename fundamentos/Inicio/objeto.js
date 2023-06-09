const prod1 = {}
prod1.nome = 'Galaxy m52 5g'
prod1.preco = 1500.80
prod1['DescontoLegal'] = 0.40 // evitar atributos com espacos

console.log(prod1)

//Outra forma de criar objetos
const prod2 ={
    nome: 'boobox 3',
    preco: 2500,
    cor:'preta',
    dimencoes:{
        largura: 50, // cm
        altura: 25, //cm
        profundidade: 20, //cm
        peso: 6.89 //quilogramas

    }
}
console.log(prod2)