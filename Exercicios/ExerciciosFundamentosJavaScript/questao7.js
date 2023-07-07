/*Crie uma função que receba quatro números como parâmetro(numero, minimo, maximo, inclusivo)
e retorne se o parâmetro numero (o primeiro) está entre o minimo e maximo. 
Quando o parâmetro inclusivo for true, tenha "entre" como inclusivo, ou seja, considerando se 
numero é igual a minimo ou a maximo. Caso o parâmetro inclusivo não seja informado, 
seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não considerando se numero é igual
a minimo ou a maximo. */

const estaEntre = (numero, minimo, maximo, inclusivo = false)=>{
    if(!inclusivo){
        if(numero > minimo && numero < maximo){
            return `O numero ${numero} está entre ${minimo} e ${maximo}.`
        }else{
            return `O numero ${numero} não está entre ${minimo} e ${maximo}.`
        }
}else if(inclusivo){
    if(numero >= minimo && numero <= maximo){
        return `O numero ${numero} está entre ${minimo} e ${maximo} inclusive podendo ser ${minimo} ou ${maximo}.`
    }else{
        return `O numero ${numero} não está entre ${minimo} e ${maximo}.`
    }
}

}
console.log(estaEntre(90, 10, 100))