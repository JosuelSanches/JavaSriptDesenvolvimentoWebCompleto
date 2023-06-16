let dobro = function(a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return implicito
console.log(dobro(Math.PI))

let ola = function(){
    return 'Ola'
}

ola = () => 'Olá'
console.log(ola())
ola = _ => 'Olá de novo.' // apesar de não parecer, há um parametro
console.log(ola())
