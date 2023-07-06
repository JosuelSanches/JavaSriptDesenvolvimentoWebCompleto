/*Crie uma função que recebe um número(de 1 a 12) e retorne o mes correspondente como uma string.
Por exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2º mês. */

const mes = (num)=>{
    /*if( num < 1 || num > 12){
        console.log(`O valor ${num} não corresponde a nenhum mês do calendario vigente.`)
    }else if(num == 1){
        return 'Janeiro'
    }else if(num == 2){
        return 'Fevereiro'
    }else if(num == 3){
        return 'Março'
    }else if(num == 4){
        return 'Abril'
    }else if(num == 5){
        return 'Maio'
    }else if(num == 6){
        return 'Junho'
    }else if(num == 7){
        return 'Julho'
    }else if(num == 8){
        return 'Agosto'
    }else if(num == 9){
        return 'Setembro'
    }else if(num == 10){
        return 'Outubro'
    }else if(num == 11){
        return 'Novenbro'
    }else if(num == 12){
        return 'Dezembro'
    }*/
    switch(num){
        case 1: return 'Janeiro'
        break
        case 2: return 'Fevereiro'
        break
        case 3: return 'Março'
        break
        case 4: return 'Abril'
        break
        case 5: return 'Maio'
        break
        case 6: return 'Junho'
        break
        case 7: return 'Julho'
        break
        case 8: return 'Agosto'
        break
        case 9: return 'Setembro'
        break
        case 10: return 'Outubro'
        break
        case 11: return 'Novembro'
        break
        case 12: return 'Dezembro'
        break
        
    }return `O valor: ${num} é invalido!`
}

console.log(mes(12))