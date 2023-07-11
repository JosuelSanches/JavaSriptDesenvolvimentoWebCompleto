console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

function toThis(){
    console.log('Dentro da função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

toThis()

function functionEspression(){
    console.log('Aponta para o global --->', this ===global)
    console.log('Não aponta para o exports --->', this === exports)
    console.log('Não aponta para o module.exports --->', this === module.exports)
    console.log('O this nesta função é o objeto GLOBAL --->', this)
}
functionEspression()

const arrowFunction = ()=>{
    console.log('Não aponta para o global --->', this === global)
    console.log('Aponta para o exports --->', this === exports)
    console.log('Aponta para o module.exports (que é basicamente o mesmo que exports) --->', this === module.exports)

    console.log('O this nesta função não é o global --->', this === global)
    console.log('O this nesta função é o module.exports --->', this === module.exports)

}
arrowFunction()