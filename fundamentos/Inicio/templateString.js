const nome = 'Rebeca'
const concatenacao = 'Olá '+nome+' !'

const template = `
Olá 
${nome}!`
console.log(concatenacao, template)

// expressoes...
console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei ${up('Josuel de souza sanches')}!`)
let nome2 =up('josuel de souza sanches')
console.log(nome2)
