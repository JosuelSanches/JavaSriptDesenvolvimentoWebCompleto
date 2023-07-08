/*Quando temos um objeto e manipulamos seus atributos, adicionando, atualizando ou removendo-os,
estamos apenas modificando-o, mas, em essência, o objeto continua o mesmo, ou seja a sua referencia de memória
é a mesma.
Num projeto que você está trbalhando, você foi designado a refatorar diversas funções
para que façam copias, com o intuito de evitar efeitos indesejáveis
em algumas situações devido a referÊncias a objetos. Abaixo, está a descrição de uma dessas funções.
Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o
nome de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a 
propriedade especificada no segundo parâmetro.*/
const refatorar = (ob,propriedade)=>{
    let copia = ob
    delete copia[propriedade]
    return copia
}

let mestre = {
    nome: 'Josuel Sanches',
    sexo: 'masculino',
    dataNasc: '04/08/1997',
    gostaDe:'Lugares frios'
}
console.log(mestre.gostaDe)
console.log(refatorar(mestre, 'gostaDe'))
console.log(Object.is(refatorar(mestre, 'gostaDe'), mestre))
