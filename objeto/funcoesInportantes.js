const pessoa ={
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) =>{
    console.log(`${chave}: ${valor} `)
})

Object.defineProperty(pessoa, 'dataDeNascimento',{
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataDeNascimento = '01/01/2017'
Object.entries(pessoa).forEach(([x, y])=>{
    console.log(`${x}: ${y}`)
})

//Object.assign(ECMAScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)