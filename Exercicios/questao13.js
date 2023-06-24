/**
 * Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.

 */
const diaUtil=(diaDaSem) =>{
    switch(diaDaSem.toUpperCase()){
        case 'DOMINGO':
            return `${diaDaSem} não é um dia util, BOM FIM DE SEMANA.`
            break
        case 'SEGUNDA-FEIRA':
            return `${diaDaSem} é um dia util.`
            break
        case 'TERCA-FEIRA' :
            return `${diaDaSem} é um dia util.`
            break
        case 'QUARTA-FEIRA':
            return `${diaDaSem} é um dia util.`
            break
        case 'QUINTA-FEIRA':
            return `${diaDaSem} é um dia util.`
            break
        case 'SEXTA-FEIRA':
            return `${diaDaSem} é um dia util.`
            break
        case 'SÁBADO':
            return `${diaDaSem} não é um dia util, BOM FIM DE SEMANA.`
            break
        
    }
return `Erro na digitação do dia: ${diaDaSem.toUpperCase()}`
}
console.log(diaUtil('domingo'))