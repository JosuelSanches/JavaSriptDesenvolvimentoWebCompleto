/**
 * Trocar o valor das variaveis
 */
let a = 7
let b = 94
console.log('Antes da troca.')
console.log('O valor de a é '+a+' e o valor de b é '+b+'.')
while(a == 7 && b == 94){
    let i = a
    a = b
    b = i
}

console.log('Depois da troca.')
console.log('O valor de a é '+a+' e o valor de b é '+b+'.')

/*[a, b]=[b, a] // aqui deveria haver outra troca
console.log('Depois da troca segunda troca.')
console.log('O valor de a é '+a+' e o valor de b é '+b+'.')*/

