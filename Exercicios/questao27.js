/* Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
 */

const crescimento = (crianca) =>{
    if(crianca[0].altura > crianca[1].altura){
        console.log(`${crianca[0].nome} é maior.`)
    }

}
const crianca=[
    {nome: 'Joao', idade: 14, altura: 170, taxa: 1.3}
    {nome: 'Jose', idade: 8, altura: 169, taxa: 1.3}
]
crescimento(170, 1,2 )