/**
 Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.

Seu programa deve mostrar apenas as notas utilizadas. 
Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação 
(note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.

 */

const dinheiroEspecie = (valor)=>{
    let notas1 = 0
    let notas5 = 0 
    let notas10 = 0
    let notas50 = 0
    let notas100 = 0

    const notaMaiorQue = (valor) =>{
        if(valor >= 100){
            return 100
        }else if(valor >= 50){
            return 50
        }else if(valor >= 10){
            return 10
        }else if(valor >= 5){
            return 5
        }else if(valor >= 1){
            return 1
        }
    }

    let valorNota = notaMaiorQue(valor)
    while (valor >= valorNota){
        switch(valorNota){
            case 100: 
                valor -= 100
                notas100 ++
                break
            case 50: 
                valor -= 50
                notas50 ++
                break
            case 10: 
                valor -= 10
                notas10 ++
                break
            case 5: 
                valor -= 5
                notas5 ++
                break
            case 1: 
                valor -= 1
                notas1 ++
                break
        }
        valorNota = notaMaiorQue(valor)
    }

    let resultado = (notas1, notas5, notas10, notas50, notas100)=>{
        let print = ``
        if (notas100 > 0){
            print += `São ${notas100} nota(s) de 100.\n`
        }if (notas50 > 0){
            print += `São ${notas50} nota(s) de 50.\n`
        }if (notas10 > 0){
            print += `São ${notas10} nota(s) de 10.\n`
        }if (notas5 > 0){
            print += `São ${notas5} nota(s) de 5.\n`
        }
        if (notas1 > 0){
            print += `São ${notas1} nota(s) de 1.\n`
        }

        return print

    }

    return resultado(notas1, notas5, notas10, notas50, notas100)

    
}

console.log(dinheiroEspecie(476.90))