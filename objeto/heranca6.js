function Aula(nome,videoID){
    this.nome = nome
    this.video = videoID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até breve', 563)

console.log(aula1, aula2)
// Simulando o new
function novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem vindo, 123')
const aula4 = novo(Aula, 'Até breve', 412)
console.log(aula3, aula4)