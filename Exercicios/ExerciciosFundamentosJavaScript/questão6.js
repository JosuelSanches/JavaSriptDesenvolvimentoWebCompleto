/*Escreva uma função que receba um valor booleano ou numérico.
Se o parametro fornecido for booleano, o retorno da função deverá ser inverso.
Por exemplo, se a entrada for false, retornará true.
Se o parâmetro for numérico, o retorno será inverso. Por exemplo, se for fornecido 1, o retorno será -1.
Se o parâmetro de entrada não for nenhum dos tipos acima, retorne "booleano ou numero esperado,
mas o parâmetro é do tipo ...*/

const inverso = (valor)=>{
    if(valor == true){
        return false
    }else if(valor == false){
        return true
    }else if(Number.isInteger(valor)){
        return valor *-1
    }else{
        return `Booleano ou numero esperado, mas o parâmetro ${valor} é do tipo ${typeof(valor)}.`
    }
}

console.log(inverso(-9))