/*A fim de manter o calendário anual ajustado com o movimento de translação da terra,
 criou-se os anos bissextos, que tem 366 dias em vez de 365 presentes nos anos normais.
 Para determinar se um ano é bissexto, é necessário saber se ele é multiplo de 4. 
 Não pode ser múltiplo de 100, exceto se for também multiplo de 400.
 Com isso em mente, desenvolva uma função que recebe um número correspondente 
 a um ano e retorne se ele é ou não bissexto.
 */

 const checarAnoBissexto = (ano) => {
    if(ano % 4 ==0 && ano %100 != 0){
            return true
    }else if(ano %400 == 0){
            return true
    }else{
        return false
    }
    }

 console.log(checarAnoBissexto(2024))