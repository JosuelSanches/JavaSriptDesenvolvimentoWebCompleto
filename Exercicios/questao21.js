/**
Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 
1) crianças com menos de 10 anos pagam R$80; 
2) conveniados com idade entre 10 e 30 anos pagam R$50;
3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95;
4) conveniados acima de 60 anos pagam R$130

 */

const planoDeSaude = (idade)=>{
    let plano = 100

    const padrao = (idade)=>{
        if(idade < 10){
            return 1
        }else if(idade <= 30 && idade > 10){
            return 2
        }else if(idade <= 60 && idade > 30){
            return 3
        }else if(idade > 60){
            return 4
        }

    }
    let selecao = padrao(idade)
    switch(selecao){
        case 1:
            return `${plano} mais o adicional da idade de ${idade} anos. O plano custa: R$${plano + 80}`
            break
        case 2:
            return `${plano} mais o adicional da idade de ${idade} anos. O plano custa: R$${plano + 50}`
            break
        case 3:
            return `${plano} mais o adicional da idade de ${idade} anos. O plano custa: R$${plano + 95}`
            break
        case 4:
            return `${plano} mais o adicional da idade de ${idade} anos. O plano custa R$${plano + 130}`
            break
    } return `Valor invalido...`
}

console.log(planoDeSaude(2))
console.log(planoDeSaude(12))
console.log(planoDeSaude(35))
console.log(planoDeSaude(56))
console.log(planoDeSaude(80))
console.log(planoDeSaude(0))