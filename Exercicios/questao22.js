/**
Criar uma função para calcular o valor a ser pago de anuidade de uma associação. 
A função recebe como parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga 
e o valor da anuidade. 
A anuidade deve ser paga no mês de janeiro. 
Por mês, é cobrado 5% de juros (sob o regime de juros
compostos).
 O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
 */

 const valorAPagar = (mes, valor)=>{
    switch(mes){
        case 1:
            return `O valor a ser pago é ${valor}.`
            break
        case 2:
            return `O valor a ser pago é ${valor +(valor * 0.05)}.`
            break
        case 3:
            return `O valor a ser pago é ${valor +(2* valor * 0.05)}.`
            break
        case 4:
            return `O valor a ser pago é ${valor + (3* valor * 0.05)}.`
            break
        case 5:
            return `O valor a ser pago é ${valor +(4 * valor * 0.05)}.`
            break
        case 6:
            return `O valor a ser pago é ${valor +(5 * valor * 0.05)}.`
            break
        case 7:
            return `O valor a ser pago é ${valor +(6 * valor * 0.05)}.`
            break
        case 8:
            return `O valor a ser pago é ${valor +(7 * valor * 0.05)}.`
            break
        case 9:
            return `O valor a ser pago é ${valor +(8 * valor * 0.05)}.`
            break
        case 10:
            return `O valor a ser pago é ${valor +(9 * valor * 0.05)}.`
            break
        case 11:
            return `O valor a ser pago é ${valor +(10 * valor * 0.05)}.`
            break
        case 12:
            return `O valor a ser pago é ${valor +(11 * valor * 0.05)}.`
            break
       
    } return `Valor inválido!`
 }

 console.log(valorAPagar(1,100))
 console.log(valorAPagar(2,100))
 console.log(valorAPagar(3,100))
 console.log(valorAPagar(4,100))
 console.log(valorAPagar(5,100))
 console.log(valorAPagar(6,100))
 console.log(valorAPagar(7,100))
 console.log(valorAPagar(8,100))
 console.log(valorAPagar(9,100))
 console.log(valorAPagar(10,100))
 console.log(valorAPagar(11,100))
 console.log(valorAPagar(12,100))
 console.log(valorAPagar(13,100))