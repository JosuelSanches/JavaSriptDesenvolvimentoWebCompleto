/**
 * Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”.
 */

const compraCarroMoto = (modelo)=>{
    switch(modelo.toUpperCase()){
        case 'HATCH':
            return `Compra do ${modelo} efetuada com sucesso.`
            break
        case 'SEDAN':
            return `Tem certeza que não prefere este modelo?`
            break
        case 'MOTOCICLETA':
            return `Tem certeza que não prefere este modelo?`
            break
        case 'CAMINHONETE':
            return `Tem certeza que não prefere este modelo?`
            break
    }

    return `Não trabalhamos com ${modelo} aqui.`
}

console.log(compraCarroMoto('moto'))