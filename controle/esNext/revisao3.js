// ES8: Object.values/Object.entries
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

//melhorias na notacao literal
const nome = `Carla`
const pessoa = {
    nome,
    ola(){
        return`Oi gente, sou a ${this.nome}`
    }
}
console.log(pessoa.nome, pessoa.ola())

// Class
class Animal {}
class Cachorro extends Animal{
    latir(){ 
        return`Au au!`}
}
console.log(new Cachorro().latir())