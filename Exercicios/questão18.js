/**
 * Faça um programa que leia um número entre 0 e 10, 
 * e escreva este número por extenso. Use o comando
 * switch. Crie um case default que escreva ‘Número fora do intervalo.’
 */

const numExtenso = (num)=>{
    switch(num){
        case 1:
            return `O número é: um`
            break
        case 2:
            return `O número é: dois`
            break
        case 3:
            return `O número é: três`
            break
        case 4:
            return `O número é: quatro`
            break
        case 5:
            return `O número é: cinco`
            break
        case 6:
            return `O número é: seis`
            break
        case 7:
            return `O número é: sete`
            break
        case 8:
            return `O número é: oito`
            break
        case 9:
            return `O número é: nove`
            break
        case 10:
            return `O número é: dez`
            break
    } return `Entrada invalida: ${num}`
}

console.log(numExtenso(1))
console.log(numExtenso(2))
console.log(numExtenso(3))
console.log(numExtenso(4))
console.log(numExtenso(5))
console.log(numExtenso(6))
console.log(numExtenso(7))
console.log(numExtenso(8))
console.log(numExtenso(9))
console.log(numExtenso(10))
console.log(numExtenso(11))