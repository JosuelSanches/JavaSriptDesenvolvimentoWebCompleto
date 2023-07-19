const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolve){
    //cumprirPromessa(3) 
    resolve([`Bia`, `Carlos`, ` Anna`, `Daniel`]) 
    //cumprirPromessa({a: 7, b: 9}) 
})

/*p.then(function(valor){
    console.log(valor)
})*/

//p.then(valor => console.log(valor))
//p   
    /*.then(valor => valor.a)
    .then(valor => valor*2)
    .then(valor => valor + 14)
    .then(valor => console.log(valor))*/
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)