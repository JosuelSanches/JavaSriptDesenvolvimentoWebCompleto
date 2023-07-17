// arrow function
const soma = (a,b)=> a + b
console.log(soma(10,80))

//Arrow function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parametro defalt
function log(texto = `Node`){
    console.log(texto)
}

log()
log(`eu sou mais forte`)

// operador rest
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n )
    return total
}
console.log(total(1, 2, 4, 3, 5))