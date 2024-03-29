/**
 * Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar.
 *  Dito isso, elabore uma função cujo objetivo é resolver a fórmula de Bhaskara.
 * Para isso, sua função deve receber três parâmetros, "ax2", "bx" e "c",
 * de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente:
 * 3, -5, 12. Como retorno de ser passado um vetor que tem dois valores
 * um para cada possivel resultado, mesmo que os resultados sejam iguais.
 * Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
 * "Delta negativo".
 */

const bhaskara = (ax2,bx,c)=>{
    let resultado =[]
    let delta = (bx ** 2) - (4 * ax2 * c)

    if (delta <0){
        return('Delta é negativo')
    }
    let a = (-bx + Math.sqrt(delta))/(2*ax2)
    let b = (-bx - Math.sqrt(delta))/(2*ax2)

    resultado.push(a)
    resultado.push(b)
    return resultado 

}
console.log(bhaskara(1, 3, 2))
console.log(bhaskara(3, 1, 2))
