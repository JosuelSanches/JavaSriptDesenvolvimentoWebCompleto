const pai = {nome: 'Pedro', corDoCabelo:'preto'}

const filha1 = Object.create(pai)
filha1.nome = 'anna'
console.log(filha1.corDoCabelo)

const filha2 = Object.create(pai,{
    nome: {value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Carla' // O nome não pode ser trocado por casa do comando writable false
console.log(`${filha2.nome} tem cabelo ${filha2.corDoCabelo}`)
/**
 * Verificando se o atributo é anumeravel
 */
console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let keys in filha2){
    filha2.hasOwnProperty(keys)?
        console.log(keys): console.log(`Por herança: ${keys}`)
}